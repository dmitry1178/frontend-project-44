import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculatingGCD = (num1, num2) => {
  if (num2 > num1) return calculatingGCD(num2, num1);
  if (!num2) return num1;
  return calculatingGCD(num2, num1 % num2);
};

const generateRound = () => {
  const generateNumber1 = getRandomNumber(1, 50);
  const generateNumber2 = getRandomNumber(1, 50);
  const question = `${generateNumber1} ${generateNumber2}`;
  const trueAnswer = calculatingGCD(generateNumber1, generateNumber2);
  return [question, String(trueAnswer)];
};

const startBrainGCD = () => {
  runEngine(rules, generateRound);
};

export default startBrainGCD;
