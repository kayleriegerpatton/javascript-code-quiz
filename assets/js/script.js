// GLOBAL VARIABLES

let counter = 60;

// declare questions/answers array
const questionsArray = [
  {
    question: "What tag is used to link a JavaScript file to an HTML file?",
    answers: ["<link>", "<script>", "<append>"],
    correctAnswer: "<script>",
  },
  {
    question: "What syntax accesses an object method?",
    answers: [
      "const methodName = objectName",
      "methodName.objectName()",
      "objectName.methodName()",
    ],
    correctAnswer: "objectName.methodName",
  },
  {
    question: "Which is not a primitive type in JavaScript?",
    answers: ["number", "boolean", "operator"],
    correctAnswer: "operator",
  },
  {
    question: "What does the .stopPropagation() method do?",
    answers: [
      "prevents event bubbling",
      "prevents event default actions",
      "prevents JS from creating HTML elements",
    ],
    correctAnswer: "prevents event bubbling",
  },
  {
    question:
      "What must always be done after getting an item from local storage?",
    answers: [
      "parse the string values",
      "stringify the values",
      "push values into an array",
    ],
    correctAnswer: "parse the string values",
  },
];

// TARGET ELEMENTS
const counterSpan = document.querySelector("#timer");
const startButton = document.querySelector("#start-button");
const startContainer = document.querySelector("#start-container");
const answerButton = document.querySelector("#answer1");
const buttonContainer = document.querySelector("#answer-buttons");
const questionText = document.querySelector("#question-text");
const questionContainer = document.querySelector("#question-container");
const mainContainer = document.querySelector("#main-container");

const timerTick = function () {
  if (counter <= 0) {
    console.log("boom");
    clearInterval(timer);
    // render next page (results or high scores?)
  } else {
    counterSpan.textContent = counter;
    console.log(counter);
    counter -= 1;
  }
};

const renderQuestion = function () {
  const answerButton = document.createElement("button");
  answerButton.setAttribute("class", "button");
  answerButton.textContent = "Answer1";

  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "answer-buttons");
  buttonContainer.appendChild(answerButton);

  const questionText = document.createElement("h2");
  questionText.setAttribute("id", "question-text");
  questionText.textContent = "Question text goes here";

  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question-container");
  questionContainer.appendChild(buttonContainer, questionText);

  mainContainer.appendChild(questionContainer);
  return;
};

const renderGameOver = function () {
  return;
};

const renderScore = function () {
  return;
};

const registerScore = function () {
  return;
};

const renderHighScores = function () {
  return;
};

const timer = setInterval(timerTick, 1000);

// start quiz
const startQuiz = function () {
  // remove div card
  startContainer.remove();
  console.log("removed starting div");

  // start timer
  timerTick(timer);

  // render question card
  renderQuestion();
  return;
};

// start quiz click event
startButton.addEventListener("click", startQuiz);
