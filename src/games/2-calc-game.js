import readlineSync from 'readline-sync';

const playingCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const multiFactorRandomNum = 50;
    const genNumber1 = Math.floor(Math.random() * multiFactorRandomNum);
    const genNumber2 = Math.floor(Math.random() * multiFactorRandomNum);

    const arrayMathSign = ['+', '-', '*'];
    const genRandomMathSign = Math.floor(Math.random() * arrayMathSign.length);
    const mathExpression = `${genNumber1} ${arrayMathSign[genRandomMathSign]} ${genNumber2}`;
    const correctAnswer = genNumber1 + genNumber2;

    console.log(`Question: ${mathExpression}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
    } else if (Number(answer) !== correctAnswer) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default playingCalcGame;
