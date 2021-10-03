// GLOBAL VARIABLES

// declare timer value
let counter = 3;

// get index number
let questionIndex = 0;

// declare questions/answers array
const questionsArray = [
  {
    question: "What tag is used to link a JavaScript file to an HTML file?",
    answers: ["a. <link>", "b. <script>", "c. <append>"],
    correctAnswer: "<script>",
  },
  {
    question: "What syntax accesses an object method?",
    answers: [
      "a. const methodName = objectName",
      "b. methodName.objectName()",
      "c. objectName.methodName()",
    ],
    correctAnswer: "objectName.methodName",
  },
  {
    question: "Which is not a primitive type in JavaScript?",
    answers: ["a. number", "b. boolean", "c. operator"],
    correctAnswer: "operator",
  },
  {
    question: "What does the .stopPropagation() method do?",
    answers: [
      "a. prevents event bubbling",
      "b. prevents event default actions",
      "c. prevents JS from creating HTML elements",
    ],
    correctAnswer: "prevents event bubbling",
  },
  {
    question:
      "What must always be done after getting an item from local storage?",
    answers: [
      "a. parse the string values",
      "b. stringify the values",
      "c. push values into an array",
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

const renderQuestion = function () {
  // increment question index, run function again passing the new index number

  // store current question
  let currentQuestion = questionsArray[questionIndex];

  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "answer-buttons");

  const renderAnswers = function (eachAnswer, index) {
    const answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answerButton");
    answerButton.setAttribute("id", index);
    answerButton.textContent = eachAnswer;
    buttonContainer.appendChild(answerButton);
  };
  currentQuestion.answers.forEach(renderAnswers);

  const questionText = document.createElement("h2");
  questionText.setAttribute("id", "question-text");
  questionText.textContent = currentQuestion.question;

  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question-container");
  questionContainer.appendChild(questionText);
  questionContainer.appendChild(buttonContainer);

  mainContainer.appendChild(questionContainer);
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

// set timer display function
const timerTick = function () {
  if (counter < 0) {
    console.log("boom");
    clearInterval(timer);
  } else {
    counterSpan.textContent = counter;
    counter -= 1;
  }
};

// timer
const timer = setInterval(timerTick, 1000);

// start quiz
const startQuiz = function () {
  // remove div card
  startContainer.remove();
  console.log("removed starting div");

  // render question card
  renderQuestion();
  return;
};

// start quiz click event
startButton.addEventListener("click", startQuiz);
