import Button from './button';
import Task1 from '../core/utils/task1';
import Task2 from '../core/utils/task2';
import Task3 from '../core/utils/task3';
import Task4 from '../core/utils/task4';
import Task5 from '../core/utils/task5';
import Task6 from '../core/utils/task6';
import Task7 from '../core/utils/task7';
import Task8 from '../core/utils/task8';

const taskArray = [
  new Task1(),
  new Task2(),
  new Task3(),
  new Task4(),
  new Task5(),
  new Task6(),
  new Task7(),
  new Task8(),
];

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
