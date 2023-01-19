import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'What is the result of the expression?';

const calculatingNum = (num1, sign, num2) => {
  if (sign === '+') return num1 + num2;
  if (sign === '-') return num1 - num2;
  if (sign === '*') return num1 * num2;
  return new Error(`Unknown mathematical operation: '${sign}'!`);
};

const generateRound = () => {
  const mathSign = ['+', '-', '*'];
  const getMathSign = mathSign[getRandomNumber(0, mathSign.length - 1)];
  const generateNumber1 = getRandomNumber(1, 50);
  const generateNumber2 = getRandomNumber(1, 50);
  const question = `${generateNumber1} ${getMathSign} ${generateNumber2}`;
  const trueAnswer = String(calculatingNum(generateNumber1, getMathSign, generateNumber2));
  return [question, trueAnswer];
};

const startBrainCalc = () => {
  runEngine(rules, generateRound);
};

export default startBrainCalc;
