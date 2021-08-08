import App from './src/modules/app';
import AppOverTasks from './src/modules/appOverTasks';

import './index.css';

const app = new App();
const appOverTask = new AppOverTasks();

app.run();
appOverTask.run();

const formRef = document.querySelector('.donate-form');
const donatesListRef = document.querySelector('.donates-container');
const buttonsListRef = document.querySelector('.buttons-list');

formRef.style.display = 'none';
donatesListRef.style.display = 'none';
buttonsListRef.style.display = 'none';

const headerRef = document.getElementById('header');
headerRef.addEventListener('click', ({ target }) => {
  if (target.name === 'donate') {
    formRef.style.display = 'flex';
    donatesListRef.style.display = 'flex';
    buttonsListRef.style.display = 'none';
    target.classList.add('active');
    target.nextElementSibling.classList.remove('active');
  }
  if (target.name === 'over') {
    formRef.style.display = 'none';
    donatesListRef.style.display = 'none';
    buttonsListRef.style.display = 'flex';
    target.classList.add('active');
    target.previousElementSibling.classList.remove('active');
  }
});
