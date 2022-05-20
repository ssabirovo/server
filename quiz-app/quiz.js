import { generateAnswer } from "./utils.js";
const operations = ["*", "-", "+"];
const quizzes = [];

// LOGIC FUNCTIONS
const generateAnswers = (corAnswer) => {
  const answers = [corAnswer];
  for (let i = 1; i < 4; i++) answers[i] = generateAnswer(corAnswer);
  const mixedAnswers = answers.sort(() => Math.random() - 0.5);
  return mixedAnswers;
};

function generateQuiz() {
  const firstNum = Math.ceil(Math.random() * 100); // 40
  const secondNum = Math.ceil(Math.random() * 100); // 33
  const ranOpIdx = Math.floor(Math.random() * operations.length);
  const operation = operations[ranOpIdx]; // +
  const correctAnswer = calcQuiz(firstNum, secondNum, operation);
  const answers = generateAnswers(correctAnswer);
  const selectedIdx = null;
  return {
    firstNum,
    secondNum,
    operation,
    correctAnswer,
    answers,
    selectedIdx,
  };
}

function calcQuiz(firstNum, secondNum, operation) {
  switch (operation) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
  }
}

// EVENT HANDLER FUNCTIONS

// UI FUNCTIONS

function renderQuiz() {
  const quiz = generateQuiz();
  console.log("quiz = ", quiz);
}

function init() {
  renderQuiz();
}

init();
