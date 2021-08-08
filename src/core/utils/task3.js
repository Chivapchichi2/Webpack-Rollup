function groupBy(arr, fn) {
  const mappedArray = arr.map(el => fn(el));
  const result = {};
  mappedArray.forEach((el, i) => {
    if (!result[el]) {
      result[el] = [];
    }
    result[el].push(arr[i]);
  });
  return result;
}

export default class Task3 {
  run() {
    console.log(groupBy([2.3, 2.2, 3.4], Math.floor));
    console.log(
      groupBy(
        [2.3, 2.2, 3.4, 5.7, 7, 7.6, 1.3, 1.5, 1.1, 0, 0.56, 8.7],
        Math.floor,
      ),
    );
    alert('Open the Console !!!');
  }
}
