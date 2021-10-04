// GLOBAL VARIABLES

// set timer start value
let counter = 10;

// set questions/answers array index number
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

// TARGET HTML ELEMENTS
const counterSpan = document.querySelector("#timer");
const headerContainer = document.querySelector(".header-container");
const startButton = document.querySelector("#start-button");
const startContainer = document.querySelector("#start-container");
const mainContainer = document.querySelector("#main-container");

const renderQuestion = function () {
  // increment question index, run function again passing the new index number

  // store current question
  let currentQuestion = questionsArray[questionIndex];

  //   create buttons div
  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "answer-buttons");

  //   create answer buttons and append
  const renderAnswers = function (eachAnswer, index) {
    const answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answerButton");
    answerButton.setAttribute("id", index);
    answerButton.textContent = eachAnswer;
    buttonContainer.appendChild(answerButton);
  };
  currentQuestion.answers.forEach(renderAnswers);

  //   create question text
  const questionText = document.createElement("h2");
  questionText.setAttribute("id", "question-text");
  questionText.textContent = currentQuestion.question;

  //   create question container div and append 2 children
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question-container");
  questionContainer.appendChild(questionText);
  questionContainer.appendChild(buttonContainer);

  mainContainer.appendChild(questionContainer);
};

const verifyAnswer = function () {
  return;
};

// renderGameOver if counter === 0
const renderGameOver = function () {
  questionContainer.remove();

  //   render new start button
  const newStartButton = document.createElement("button");
  newStartButton.setAttribute("id", "new-start-button");
  newStartButton.setAttribute("class", "button");
  newStartButton.textContent = "Start Quiz";

  // render button div, append child button
  const newStartDiv = document.createElement("div");
  newStartDiv.setAttribute("id", "new-start-div");
  newStartDiv.appendChild(newStartButton);

  // render game over message p
  const gameOverMessage = document.createElement("p");
  gameOverMessage.setAttribute("id", "game-over-text");
  gameOverMessage.textContent = "Times up! View your high scores or try again.";

  // render Game Over h1
  const gameOverTitle = document.createElement("h1");
  gameOverTitle.setAttribute("id", "game-over");
  gameOverTitle.textContent = "GAME OVER";

  // append children to main container
  mainContainer.appendChild(gameOverTitle);
  mainContainer.appendChild(gameOverMessage);
  mainContainer.appendChild(newStartDiv);
};

const renderScoreForm = function () {
  // remove question card
  // render HTML elements
  //   render submit button
  const formButton = document.createElement("button");
  formButton.setAttribute("class", "button");
  formButton.textContent = "Submit";

  // render input
  const formInput = document.createElement("input");
  formInput.setAttribute("type", "text");
  formInput.setAttribute("name", "initials");
  formInput.setAttribute("id", "initials");

  // render label
  const formLabel = document.createElement("label");
  formLabel.setAttribute("for", "initials");
  formLabel.textContent = "Enter your initials: ";

  //  render form
  const form = document.createElement("form");
  form.setAttribute("action", "");

  // append 3 children to form
  form.appendChild(formLabel);
  form.appendChild(formInput);
  form.appendChild(formButton);

  // render p
  const scoreText = document.createElement("p");
  scoreText.textContent = "Your final score is " + counter;

  // render h2
  const scoreTitle = document.createElement("h2");
  scoreTitle.textContent = "You beat the clock!";

  // render div
  const formDiv = document.createElement("div");
  formDiv.setAttribute("id", "initials-form");

  // append 3 children to div
  formDiv.appendChild(scoreTitle);
  formDiv.appendChild(scoreText);
  formDiv.appendChild(form);

  //   append div to main
  mainContainer.appendChild(formDiv);

  // get counter value to set score
  return;
};

const registerScore = function () {
  // add click event to submit button
  // prevent default form submission?
  return;
};

const renderHighScores = function () {
  return;
};

// set timer & display function
const timerTick = function () {
  if (counter < 0) {
    console.log("BOOM");
    clearInterval(timer);
    // renderGameOver();
  } else {
    counterSpan.textContent = counter;
    counter -= 1;
  }
};

// timer interval
const timer = setInterval(timerTick, 1000);

// start quiz
const startQuiz = function () {
  // remove div card
  startContainer.remove();

  // loop: for (let i = 0; i < questionsArray.length; i++) {
  // render question card
  renderScoreForm();

  // verify answer
  //   if incorrect then deduct timer value }

  // if answered all questions then:
  //   render score from counter value
  //   register score to local storage
  //   render high scores page, pull from local storage

  return;
};

// startQuiz click event
startButton.addEventListener("click", startQuiz);

// select answer click event

// restart quiz click event
// mainContainer.addEventListener("click", startQuiz);
