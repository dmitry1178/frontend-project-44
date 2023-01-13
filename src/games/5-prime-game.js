import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();
  const trueAnswer = isEven(question) === true ? 'yes' : 'no';
  return [question, trueAnswer];
};

const startBrainPrime = () => {
  runEngine(rules, generateRound);
};

export default startBrainPrime;




const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) return false;
  }
  return true;
};

const playingPrimeGame = () => {
  const multiFactorRandomNum = 50;

  for (let i = 0; i < 3; i += 1) {
    const genNumber = Math.floor(Math.random() * multiFactorRandomNum);

    const trueAnswer = isPrime(genNumber);

    if (trueAnswer === true && answer === 'yes') {
      console.log('Correct!');
    } else if (trueAnswer === true && answer !== 'yes') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    }

    if (trueAnswer === false && answer === 'no') {
      console.log('Correct!');
    } else if (trueAnswer === false && answer !== 'no') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }
};
