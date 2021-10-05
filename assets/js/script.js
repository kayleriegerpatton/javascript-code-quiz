// GLOBAL VARIABLES

// set timer start value
let counter = 30;

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

// TARGET STATIC HTML ELEMENTS
const counterSpan = document.querySelector("#timer");
const headerContainer = document.querySelector(".header-container");
const startButton = document.querySelector("#start-button");
const startContainer = document.querySelector("#start-container");
const mainContainer = document.querySelector("#main-container");

// target questionContainer for removal and click events
const questionContainer = document.createElement("div");
questionContainer.setAttribute("id", "question-container");

// render question container
// ***(working but without index increment)
const renderQuestion = function () {
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

  //  append 2 children to questionContainer

  questionContainer.appendChild(questionText);
  questionContainer.appendChild(buttonContainer);

  mainContainer.appendChild(questionContainer);
};

const verifyAnswer = function (event) {
  const currentTarget = event.currentTarget;
  const target = event.target;

  //   check if click is on button
  if (target.getAttribute("class") === "answerButton") {
    console.log("button clicked");
  }
  // compare clicked button's array value to answer value
  // use event handler?
  return;
};

// renderGameOver if counter === 0 (*** Working)
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

  //   render gameOverContainer div, append 3 children
  const gameOverContainer = document.createElement("div");
  gameOverContainer.setAttribute("id", "game-over-container");
  gameOverContainer.appendChild(gameOverTitle);
  gameOverContainer.appendChild(gameOverMessage);
  gameOverContainer.appendChild(newStartDiv);

  // append container to main container
  mainContainer.appendChild(gameOverContainer);
};

// renderScoreForm (*** Working)
const renderScoreForm = function () {
  //   remove question container and header
  questionContainer.remove();
  headerContainer.remove();

  // render anchor tag
  const scoresLink = document.createElement("a");
  scoresLink.setAttribute("href", "./highscores.html");
  scoresLink.setAttribute("id", "form-submit");
  scoresLink.textContent = "Submit";

  //   render submit button
  const formButton = document.createElement("button");
  formButton.setAttribute("class", "button");
  formButton.setAttribute("id", "form-button");
  formButton.appendChild(scoresLink);

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
  scoreText.textContent = "Your final score is " + counter + ".";

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
};

const registerScore = function () {
  // check for click on container and check event target
  document.mainContainer.addEventListener("click", function (event) {
    if (event.target.id == "form-submit") {
    }
  });
  // prevent default form submission?
  // store score value in local storage
  return;
};

const renderHighScores = function () {
  // pull and render scores list from local storage?
  return;
};

// set timer & display function
const timerTick = function () {
  if (counter < 0) {
    console.log("BOOM");
    clearInterval(timer);
    renderGameOver();
  } else {
    counterSpan.textContent = counter;
    counter -= 1;
  }
};

// timer interval
const timer = setInterval(timerTick, 1000);

// start quiz
const startQuiz = function () {
  // remove starting div
  startContainer.remove();

  // loop: for (let questionIndex = 0; questionIndex < questionsArray.length; questionIndex++) {
  // render question card
  renderQuestion();

  //   verifyAnswer();
  //   if (){
  //     // if ===  then increment questionIndex value
  //     questionIndex++
  //       //  remove previous question container div
  //       questionContainer.remove();
  //       renderQuestion();
  //         // else deduct counter value
  //   } else {
  //       counter -= 5;
  //   }

  // if counter === 0 then renderGameOver

  // if answered all questions then:
  //   render score from counter value
  //   register score to local storage
  //   render high scores page, pull from local storage

  return;
};

const restartQuiz = function () {
  gameOverContainer.remove();
};

// startQuiz click event
startButton.addEventListener("click", startQuiz);

// verify answer click event
questionContainer.addEventListener("click", verifyAnswer);

// submit/store score click event

// restart quiz click event
// mainContainer.addEventListener("click", startQuiz);
