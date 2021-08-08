export default class Button {
  #button;
  constructor(number) {
    this.#button = document.createElement('button');
    this.#button.type = 'button';
    this.#button.className = 'button';
    this.#button.name = number;
    this.#button.textContent = `Task ${number}`;
  }

  render() {
    const li = document.createElement('li');
    li.append(this.#button);
    return li;
  }
}
