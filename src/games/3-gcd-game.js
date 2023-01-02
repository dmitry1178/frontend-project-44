import readlineSync from 'readline-sync';

const calculatingGCD = (x, y) => {
  if (y > x) return calculatingGCD(y, x);
  if (!y) return x;
  return calculatingGCD(y, x % y);
};

const playingGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const multiFactorRandomNum = 100;
    const genNumber1 = Math.floor(Math.random() * multiFactorRandomNum);
    const genNumber2 = Math.floor(Math.random() * multiFactorRandomNum);
    const random2Num = `${genNumber1} ${genNumber2}`;
    const calcGcdRandom2num = calculatingGCD(genNumber1, genNumber2);

    console.log(`Question: ${random2Num}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === calcGcdRandom2num) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calcGcdRandom2num}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default playingGcdGame;
