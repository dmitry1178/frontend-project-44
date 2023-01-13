import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'What is the result of the expression?';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();
  const trueAnswer = isEven(question) === true ? 'yes' : 'no';
  return [question, trueAnswer];
};

const startBrainCalc = () => {
  runEngine(rules, generateRound);
};

export default startBrainCalc;




const playingCalcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const multiFactorRandomNum = 50;
    const genNumber1 = Math.floor(Math.random() * multiFactorRandomNum);
    const genNumber2 = Math.floor(Math.random() * multiFactorRandomNum);

    const arrayMathSign = ['+', '-', '*'];
    const genRandomMathSign = arrayMathSign[Math.floor(Math.random() * arrayMathSign.length)];
    const mathExpression = `${genNumber1} ${genRandomMathSign} ${genNumber2}`;

    if (genRandomMathSign === '+' && Number(answer) === genNumber1 + genNumber2) {
      console.log('Correct!');
    } else if (genRandomMathSign === '+' && Number(answer) !== genNumber1 + genNumber2) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${genNumber1 + genNumber2}'.\nLet's try again, ${userName}!`);
    }

    if (genRandomMathSign === '-' && Number(answer) === genNumber1 - genNumber2) {
      console.log('Correct!');
    } else if (genRandomMathSign === '-' && Number(answer) !== genNumber1 - genNumber2) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${genNumber1 - genNumber2}'.\nLet's try again, ${userName}!`);
    }

    if (genRandomMathSign === '*' && Number(answer) === genNumber1 * genNumber2) {
      console.log('Correct!');
    } else if (genRandomMathSign === '*' && Number(answer) !== genNumber1 * genNumber2) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${genNumber1 * genNumber2}'.\nLet's try again, ${userName}!`);
    }
  }
};

