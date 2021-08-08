import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import * as utils from '../core/utils';

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];

const formattedDateMockDonates = mockDonates.map(i => {
  return {
    ...i,
    date: utils.getFormattedTime(i.date),
  };
});

export default class App {
  #donateForm;
  #donateList;
  #state;

  constructor() {
    this.#state = {
      donates: formattedDateMockDonates,
      totalAmount: utils.calculateSumOfNumbers(
        formattedDateMockDonates.map(({ amount }) => amount),
      ),
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

  handleSubmit(e) {
    e.preventDefault();
    const input = e.target[0];
    const amount = +input.value;
    const date = utils.getFormattedTime(new Date());
    this.createNewDonate.bind(this)({ amount, date });
    input.value = '';
  }

  run() {
    const root = document.getElementById('root');
    root.append(this.#donateForm.render(), this.#donateList.render());
    document
      .querySelector('.donate-form')
      .addEventListener('submit', this.handleSubmit.bind(this));
  }
}
