const isPalindrome = text => {
  const indexOfHalfText = Math.floor(text.length / 2);
  const halfOfTextArray = text.split('').slice(0, indexOfHalfText);
  return text.slice(-indexOfHalfText) === halfOfTextArray.reverse().join('');
};

export default class Task8 {
  run() {
    console.log(isPalindrome('racecar'));
    console.log(isPalindrome('programmer'));

    alert('Open the Console !!!');
  }
}
