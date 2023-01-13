import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculatingGCD = (x, y) => {
  if (y > x) return calculatingGCD(y, x);
  if (!y) return x;
  return calculatingGCD(y, x % y);
};

const generateRound = () => {
  const question = getRandomNumber();
  const trueAnswer = isEven(question) === true ? 'yes' : 'no';
  return [question, trueAnswer];
};

const startBrainGCD = () => {
  runEngine(rules, generateRound);
};

export default startBrainGCD;



const playingGcdGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const multiFactorRandomNum = 100;
    const genNumber1 = Math.floor(Math.random() * multiFactorRandomNum);
    const genNumber2 = Math.floor(Math.random() * multiFactorRandomNum);
    const random2Num = `${genNumber1} ${genNumber2}`;
    const calcGcdRandom2num = calculatingGCD(genNumber1, genNumber2);

    if (Number(answer) === calcGcdRandom2num) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calcGcdRandom2num}'.\nLet's try again, ${userName}!`);
    }
  }
};
