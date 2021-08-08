const unique = arr => [...new Set(arr)];

export default class Task7 {
  run() {
    console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]));

    alert('Open the Console !!!');
  }
}
