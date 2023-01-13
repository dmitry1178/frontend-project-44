#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, trueAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
