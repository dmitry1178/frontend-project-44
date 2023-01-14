import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'What number is missing in the progression?';

const genProgressionArrayNums = () => {
  const randomFirstNum = getRandomNumber(1, 10);
  const randomProgressStepNum = getRandomNumber(1, 5);
  const progressionArray = [];
  for (let i = randomFirstNum; i < 55; i += randomProgressStepNum) {
    if (progressionArray.length !== 10) progressionArray.push(i); // make array with 10 numbers
  }
  return progressionArray;
};

const genProgressionWithHiddenNum = () => {
  const progressionArrayNums = genProgressionArrayNums();
  const randomIndexFromArray = Math.floor(Math.random() * progressionArrayNums.length);
  const randomNumFromArray = progressionArrayNums[randomIndexFromArray];
  const resultArray = [];
  for (let i = 0; i < progressionArrayNums.length; i += 1) {
    if (progressionArrayNums[i] === randomNumFromArray) {
      resultArray[i] = '..';
    } else {
      resultArray[i] = progressionArrayNums[i];
    }
  }
  return resultArray;
};

const calculatingHiddenNumber = (array) => {
  const findIndexHiddenNum = array.indexOf('..');
  let result;
  if (findIndexHiddenNum === 0) {
    result = array[1] - (array[2] - array[1]);
  } else if (findIndexHiddenNum === array.length - 1) {
    result = array[array.length - 2] + (array[array.length - 2] - array[array.length - 3]);
  } else {
    result = (array[findIndexHiddenNum + 1]
    - array[findIndexHiddenNum - 1])
    / 2 + array[findIndexHiddenNum - 1];
  }
  return result;
};

const generateRound = () => {
  const progressionWithHiddenNum = genProgressionWithHiddenNum();
  const question = progressionWithHiddenNum.join(' ');
  const trueAnswer = calculatingHiddenNumber(progressionWithHiddenNum);
  return [question, String(trueAnswer)];
};

const startBrainProgression = () => {
  runEngine(rules, generateRound);
};

export default startBrainProgression;
