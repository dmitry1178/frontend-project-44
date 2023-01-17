import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';
const maxNumber1UpTo = 50;
const maxNumber2UpTo = 50;

const calculatingGCD = (num1, num2) => {
  if (num2 > num1) return calculatingGCD(num2, num1);
  if (!num2) return num1;
  return calculatingGCD(num2, num1 % num2);
};

const generateRound = () => {
  const generateNumber1 = getRandomNumber(1, maxNumber1UpTo);
  const generateNumber2 = getRandomNumber(1, maxNumber2UpTo);
  const question = `${generateNumber1} ${generateNumber2}`;
  const trueAnswer = String(calculatingGCD(generateNumber1, generateNumber2));
  return [question, trueAnswer];
};

const startBrainGCD = () => {
  runEngine(rules, generateRound);
};

export default startBrainGCD;
