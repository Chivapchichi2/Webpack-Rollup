const oddSort = array => {
  const oddArray = array.filter(el => el % 2 !== 0);
  oddArray.sort((a, b) => a - b);
  array.forEach((el, i) => {
    if (el % 2 === 0) {
      oddArray.splice(i, 0, el);
    }
  });
  return oddArray;
};

export default class Task6 {
  run() {
    console.log(oddSort([7, 3, 4, 9, 5, 2, 17]));

    alert('Open the Console !!!');
  }
}
