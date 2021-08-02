import { Settings as settings } from '../core/constants/settings';

export class DonateList {
  #donates;
  #container;
  constructor(donates) {
    this.#donates = donates;
    this.#container = document.createElement('div');
    this.#container.className = 'donates-container';
  }

  updateDonates(updatedDonates) {
    const donatesContainerRef = document.querySelector(
      '.donates-container__donates',
    );
    donatesContainerRef.innerHTML = '';
    donatesContainerRef.append(
      ...updatedDonates.map(({ amount, date }) => {
        const div = document.createElement('div');
        div.className = 'donate-item';
        div.textContent = `${date} - `;

        const b = document.createElement('b');
        b.textContent = `${amount}${settings.currency}`;
        div.append(b);

        return div;
      }),
    );
  }

  render() {
    const title = document.createElement('h2');
    title.className = 'donates-container__title';
    title.textContent = 'Список донатов';

    const div = document.createElement('div');
    div.className = 'donates-container__donates';

    div.append(
      ...this.#donates.map(({ amount, date }) => {
        const div = document.createElement('div');
        div.className = 'donate-item';
        div.textContent = `${date} - `;

        const b = document.createElement('b');
        b.textContent = `${amount}${settings.currency}`;
        div.append(b);

        return div;
      }),
    );

    this.#container.append(title, div);

    return this.#container;
  }
}
