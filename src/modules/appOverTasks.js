import Button from './button';
import Task1 from '../core/utils/task1';

const taskArray = [new Task1()];

export default class AppOverTasks {
  run() {
    const root = document.getElementById('root');

    const buttonsList = document.createElement('ul');
    buttonsList.className = 'buttons-list';

    for (let i = 1; i < 9; i++) {
      const taskButton = new Button(i);
      buttonsList.append(taskButton.render());
    }
    root.append(buttonsList);
    buttonsList.addEventListener('click', ({ target }) => {
      if (target.nodeName !== 'BUTTON') return;

      buttonsList.childNodes.forEach(i => {
        i.firstChild.classList.remove('active');
      });
      target.classList.add('active');
      taskArray[Number(target.name) - 1].run();
    });
  }
}