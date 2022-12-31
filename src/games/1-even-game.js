import readlineSync from 'readline-sync';

const playingEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const multiFactorRandomNum = 50;

  for (let i = 0; i < 3; i += 1) {
    const genNumber = Math.floor(Math.random() * multiFactorRandomNum);
    console.log(`Question: ${genNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (genNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (genNumber % 2 === 0 && answer !== 'yes') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    }

    if (genNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else if (genNumber % 2 !== 0 && answer !== 'no') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default playingEvenGame;
