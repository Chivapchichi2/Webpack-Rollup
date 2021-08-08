function isEqualSymbols(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
export default class Task4 {
  run() {
    console.log(isEqualSymbols('адрес', 'среда'));
    console.log(isEqualSymbols('ноутбук', 'программист'));

    alert('Open the Console !!!');
  }
}
