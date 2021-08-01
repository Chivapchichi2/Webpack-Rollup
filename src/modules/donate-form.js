export class DonateForm {
  #form;
  #totalAmount;
  #createNewDonate;

  constructor(totalAmount, createNewDonate) {
    this.#form = document.createElement('form');
    this.#form.className = 'donate-form';
    this.#totalAmount = `${totalAmount}$`;
    this.#createNewDonate = createNewDonate;
  }

  updateTotalAmount(newAmount) {
    document.getElementById('total-amount').textContent = `${newAmount}$`;
  }

  render() {
    const title = document.createElement('h1');
    title.id = 'total-amount';
    title.textContent = this.#totalAmount;

    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = 'Введите сумму в $';

    const input = document.createElement('input');
    input.className = 'donate-form__donate-input';
    input.name = 'amount';
    input.type = 'number';
    input.max = '100';
    input.min = '0';
    input.required = '';
    input.autocomplete = 'off';

    label.append(input);

    const button = document.createElement('button');
    button.className = 'donate-form__submit-button';
    button.type = 'submit';
    button.textContent = 'Задонатить';

    this.#form.append(title, label, button);

    return this.#form;
  }
}
