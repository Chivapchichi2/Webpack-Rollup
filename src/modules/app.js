import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';

export default class App {
  #donateForm;
  #donateList;
  #state;

  constructor() {
    this.#state = {
      donates: [],
      totalAmount: 0,
    };
    this.#donateForm = new DonateForm(
      this.#state.totalAmount,
      this.createNewDonate.bind(this),
    );
    this.#donateList = new DonateList(this.#state.donates);
  }

  createNewDonate(newDonate) {
    this.#state.donates.push(newDonate);
    this.#state.totalAmount += newDonate.amount;
    this.#donateList.updateDonates(this.#state.donates);
    this.#donateForm.updateTotalAmount(this.#state.totalAmount);
  }

  run() {
    document.body.append(this.#donateForm.render(), this.#donateList.render());
    document.querySelector('.donate-form').addEventListener('submit', e => {
      e.preventDefault();
      const input = e.target[0];
      const amount = +input.value;
      const date = new Date();
      this.createNewDonate({ amount, date });
      input.value = '';
    });
  }
}
