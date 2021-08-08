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
      result = Number((firstNumber / secondNumber).toFixed(2));
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
  get wrong() {
    return this.#state.wrong;
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
    const minNumb = Number(prompt('Choose the smallest number')?.trim());
    const maxNumb = Number(prompt('Choose the largest  number')?.trim());
    const repeat = Number(prompt('Select the number of tasks')?.trim());
    const makeQuestion = () => {
      const expression = this.test(minNumb, maxNumb);
      const userAnswer = Number(prompt(expression.expression).trim());
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
    for (let i = 0; i < repeat; i++) {
      makeQuestion();
    }
    const mark = Math.round((5 * this.right) / (this.right + this.wrong));
    alert(`Your mark is ${mark}. Max mark is 5`);
    this.clear = 0;
  }
}
