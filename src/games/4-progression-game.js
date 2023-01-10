import readlineSync from 'readline-sync';

const genQuestionProgressString = () => {
  const firstNumUpTo = 20;
  const randomFirstNum = Math.floor(Math.random() * firstNumUpTo);
  const progressStepRangeUpTo = 5;
  const randomNumProgressStep = Math.floor(Math.random() * progressStepRangeUpTo);

  let progressNums = '';
  for (let i = randomFirstNum; i < 65; i += randomNumProgressStep) {
    progressNums += `${i}${' '}`;
  }
  const progressionNumsArray = progressNums.split(' ').slice(0, 10);

  const arrayLengthRandomIndex = Math.floor(Math.random() * progressionNumsArray.length);
  const randomNumFromArray = progressionNumsArray[arrayLengthRandomIndex];

  const resultArray = [];
  for (let i = 0; i < progressionNumsArray.length; i += 1) {
    if (progressionNumsArray[i] === randomNumFromArray) {
      resultArray[i] = '..';
    } else {
      resultArray[i] = progressionNumsArray[i];
    }
  }
  return resultArray.join(' ');
};

const playingProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const QuestionProgressString = genQuestionProgressString();
    console.log(`Question: ${QuestionProgressString}`);
    const answer = readlineSync.question('Your answer: ');

    const strToArray = QuestionProgressString.split(' ');
    const indexFindNum = strToArray.indexOf('..');
    let trueAnswer;
    if (indexFindNum === 0) {
      trueAnswer = Number(strToArray[1]) - Number((strToArray[2] - strToArray[1]));
    } else if (indexFindNum === 9) {
      trueAnswer = Number(strToArray[8]) + Number((strToArray[8] - strToArray[7]));
    } else {
      trueAnswer = Number((strToArray[indexFindNum + 1] - strToArray[indexFindNum - 1]) / 2) + Number(strToArray[indexFindNum - 1]);
    }

    if (Number(answer) === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default playingProgressionGame;
