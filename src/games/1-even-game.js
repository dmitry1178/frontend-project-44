import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();
  const trueAnswer = isEven(question) === true ? 'yes' : 'no';
  return [question, trueAnswer];
};

const startBrainEven = () => {
  runEngine(rules, generateRound);
};

export default startBrainEven;
