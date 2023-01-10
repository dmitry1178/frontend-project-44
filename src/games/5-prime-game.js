import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) return false;
  }
  return true;
};

const playingPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const multiFactorRandomNum = 50;

  for (let i = 0; i < 3; i += 1) {
    const genNumber = Math.floor(Math.random() * multiFactorRandomNum);
    console.log(`Question: ${genNumber}`);
    const answer = readlineSync.question('Your answer: ');
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

  return console.log(`Congratulations, ${userName}!`);
};

export default playingPrimeGame;
