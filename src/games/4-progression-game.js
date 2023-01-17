import runEngine from '../index.js';

import getRandomNumber from '../getRandomNumber.js';

const rules = 'What number is missing in the progression?';
const firstNumProgressionUpTo = 10;
const stepNumProgression = 5;
const maxLengthProgression = 10;

const getProgression = (randomFirstNum, minLengthNum, randomStepNum) => {
  const resultProgression = [];
  for (let i = randomFirstNum; i < minLengthNum; i += randomStepNum) {
    if (resultProgression.length !== maxLengthProgression) resultProgression.push(i);
  }
  return resultProgression;
};

const generateRound = () => {
  const randomFirstNum = getRandomNumber(1, firstNumProgressionUpTo);
  const randomStepNum = getRandomNumber(1, stepNumProgression);
  const minLengthNum = randomFirstNum + (randomStepNum * maxLengthProgression);

  const progression = getProgression(randomFirstNum, minLengthNum, randomStepNum);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const trueAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, trueAnswer];
};

const startBrainProgression = () => {
  runEngine(rules, generateRound);
};

export default startBrainProgression;
