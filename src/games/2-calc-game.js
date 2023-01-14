import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'What is the result of the expression?';

const calculatingNum = (num1, sign, num2) => {
  let result;
  if (sign === '+') result = num1 + num2;
  if (sign === '-') result = num1 - num2;
  if (sign === '*') result = num1 * num2;
  return result;
};

const generateRound = () => {
  const arrayMathSign = ['+', '-', '*'];
  const getMathSign = arrayMathSign[Math.floor(Math.random() * arrayMathSign.length)];
  const generateNumber1 = getRandomNumber(1, 50);
  const generateNumber2 = getRandomNumber(1, 50);
  const question = `${generateNumber1} ${getMathSign} ${generateNumber2}`;
  const trueAnswer = calculatingNum(generateNumber1, getMathSign, generateNumber2);
  return [question, String(trueAnswer)];
};

const startBrainCalc = () => {
  runEngine(rules, generateRound);
};

export default startBrainCalc;
