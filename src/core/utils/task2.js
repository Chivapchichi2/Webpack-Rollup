export default class Task2 {
  run() {
    const rangeOfTicketsNumber = [1016, 1937];
    let winnerNumber = rangeOfTicketsNumber[1];
    for (let i = winnerNumber; i > rangeOfTicketsNumber[0]; i--) {
      if (i % (3 * 7) === 0 && i % 2 !== 0 && i % 5 !== 0) {
        winnerNumber = i;
        break;
      }
    }
    return alert(`The Winner is - ticket № ${winnerNumber} !!!`);
  }
}
