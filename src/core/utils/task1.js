function createMathTest(minNum = 0, maxNum = 100) {
  const mathSign = ['+', '-', '*', '/'];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const firstNumber = getRandomIntInclusive(minNum, maxNum);
  const secondNumber = getRandomIntInclusive(minNum, maxNum);
  const indexOfMathSign = getRandomIntInclusive(0, 3);

  let result = 0;

  switch (mathSign[indexOfMathSign]) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = (firstNumber / secondNumber).toFixed(2);
      break;
    default:
      result = firstNumber + secondNumber;
  }

  const randomExpression = {
    expression: ` ${firstNumber} ${mathSign[indexOfMathSign]} ${secondNumber} = ? `,
    result,
  };

  return randomExpression;
}

export default class Task1 {
  #test;
  #state;
  constructor() {
    this.#test = createMathTest;
    this.#state = {
      right: 0,
      wrong: 0,
    };
  }
  get test() {
    return this.#test;
  }
  get right() {
    return this.#state.right;
  }
  set clear(n) {
    this.#state = {
      right: n,
      wrong: n,
    };
  }
  set right(n) {
    this.#state.right += n;
  }
  set wrong(n) {
    this.#state.wrong += n;
  }

  run() {
    const minNumb = Number(prompt('Сhoose the smallest number').trim());
    const maxNumb = Number(prompt('Сhoose the largest  number').trim());
    const makeQuestion = () => {
      const expression = this.test(minNumb, maxNumb);
      alert(expression.expression);
      const userAnswer = Number(prompt('').trim());
      if (expression.result === userAnswer) {
        this.right = 1;
        alert(`This is right!!! ${userAnswer}`);
      } else {
        this.wrong = 1;
        alert(
          `This is wrong!!! ${userAnswer}. Correct answer: ${expression.result}`,
        );
      }
    };
    makeQuestion();
    makeQuestion();
    makeQuestion();
    makeQuestion();
    makeQuestion();
    alert(`Your mark is ${this.right}. Max mark is 5`);
    this.clear = 0;
  }
}
