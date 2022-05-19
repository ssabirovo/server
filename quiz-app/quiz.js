"use strict";
const operations = ["*", "-", "+"];

const generateUnsortedAnswers = (corAnswer) => {
  return [44, 11, 20, corAnswer];
};
function generateQuiz() {
  const firstNum = Math.ceil(Math.random() * 100); // 40
  const secondNum = Math.ceil(Math.random() * 100); // 33
  const ranOpIdx = Math.floor(Math.random() * operations.length);
  const operation = operations[ranOpIdx]; // +
  const correctAnswer = calcQuiz(firstNum, secondNum, operation);
  const unsortedAnswers = generateUnsortedAnswers(correctAnswer); // xato javoblar listi [46,70,78,73] -> [70,78,73,46]
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
