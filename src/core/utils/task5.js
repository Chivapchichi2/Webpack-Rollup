export default class Task5 {
  #convertStringOfDateToMs(string) {
    const array = string.split('.');
    return new Date(
      Number(array[2]),
      Number(array[1] - 1),
      Number(array[0]),
    )?.getTime();
  }

  run() {
    const targetName = prompt('Name of Event');
    let targetDate = prompt(
      'Date of Event in format dd.mm.yyyy & later than the time is now',
    );
    let timeTarget = this.#convertStringOfDateToMs.bind(this)(targetDate);
    while (!timeTarget || timeTarget < Date.now()) {
      targetDate = prompt(
        'Date of Event in format dd.mm.yyyy & later than the time is now',
      );
      timeTarget = this.#convertStringOfDateToMs.bind(this)(targetDate);
    }
    const timerRef = document.getElementById('timer');
    timerRef.firstElementChild.textContent = targetName;
    timerRef.style.display = 'flex';
    const arrayOfSpans = timerRef.querySelectorAll('.value');
    const task5Btn = document.querySelector('.button[name="5"]');
    const intervalId = setInterval(function makeTimer() {
      const time = timeTarget - Date.now();
      if (time <= 0 || !task5Btn.classList.contains('active')) {
        clearInterval(intervalId);
        timerRef.style.display = 'none';
        return;
      }
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      const arrayOfTimes = [days, hours, mins, secs];
      arrayOfSpans.forEach((span, i) => (span.textContent = arrayOfTimes[i]));
    }, 1000);
  }
}
