import { generateAnswer, calcQuiz } from "./utils.js";
const first_num = document.querySelector(".first-number");
const second_num = document.querySelector(".second-number");
const operation_ui = document.querySelector(".operation");
const answers_ui = document.querySelectorAll(".answer");
const quiz_round = document.querySelector(".quiz-round");
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
  const quiz = {
    firstNum,
    secondNum,
    operation,
    correctAnswer,
    answers,
    selectedIdx,
  };
  quizzes.push(quiz);
  quiz_round.innerText = quizzes.length;
  return quiz;
}

function nextQuiz() {
  const newQuiz = generateQuiz();
  renderQuiz(newQuiz);
}

// EVENT HANDLER FUNCTIONS
function onSelectAnswer(event) {
  const currentQuiz = quizzes[quizzes.length - 1]; // currentQuiz
  currentQuiz.selectedIdx = event.target.id;
  nextQuiz();
}

// UI FUNCTIONS

function renderQuiz(quiz) {
  const { operation, firstNum, secondNum, answers, correctAnswer } = quiz;
  first_num.innerText = firstNum;
  second_num.innerText = secondNum;
  operation_ui.innerText = operation;

  answers_ui.forEach((answer_ui, idx) => {
    answer_ui.innerText = answers[idx];
    answer_ui.id = idx;
    answer_ui.addEventListener("click", onSelectAnswer);
  });
}

function init() {
  const firstQuiz = generateQuiz();
  renderQuiz(firstQuiz);
}

init();
