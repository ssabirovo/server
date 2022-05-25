import { generateAnswer, calcQuiz } from "./utils.js";
const MAX_ROUND = 15;
const MAX_TIME = 5;
const first_num = document.querySelector(".first-number");
const second_num = document.querySelector(".second-number");
const operation_ui = document.querySelector(".operation");
const answers_ui = document.querySelectorAll(".answer");
const quiz_round = document.querySelector(".quiz-round");
const points_ui = document.querySelector(".points");
const timer_ui = document.querySelector(".timer");
const operations = ["*", "-", "+"];
const quizzes = [];
const classOfStatus = ["fail", "success", "timeout"];

let timer = MAX_TIME;
let intervalId;

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

function checkTimer() {
  if (timer === 0) {
    timer = MAX_TIME;
    timer_ui.innerText = timer + "s";

    renderPoint(classOfStatus[2]);
    nextQuiz();

    checkFinish();
  }
}

function checkFinish() {
  if (quizzes.length === MAX_ROUND) {
    alert("Oyin tugadi");
    return clearInterval(intervalId);
  }
}

// EVENT HANDLER FUNCTIONS
function onSelectAnswer({ target }) {
  const currentQuiz = quizzes[quizzes.length - 1]; // currentQuiz
  currentQuiz.selectedIdx = target.id;
  const isCorrect = currentQuiz.correctAnswer === +target.innerText;

  if (quizzes.length === MAX_ROUND) {
    alert("Oyin tugadi");
    return clearInterval(intervalId);
  }

  if (isCorrect) {
    timer += 5;
    timer_ui.innerText = timer + "s";
  }
  const classIdx = isCorrect ? 1 : 0;
  renderPoint(classOfStatus[classIdx]);
  nextQuiz();
}

function renderPoint(suffix) {
  const className = `point point--${suffix}`;
  const btn = document.createElement("button");
  btn.className = className;
  btn.innerText = quizzes.length;
  btn.disabled = true;
  points_ui.appendChild(btn);
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
  createInterval();
}

function createInterval() {
  intervalId = setInterval(() => {
    timer--;
    timer_ui.innerText = timer + "s";
    checkTimer();
  }, 1000);
}

init();
