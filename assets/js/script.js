// GLOBAL VARIABLES

// questions/answers array
const questionsArray = [
  {
    question: "What tag is used to link a JavaScript file to an HTML file?",
    answers: ["a. <link>", "b. <script>", "c. <append>"],
    correctAnswer: "b. <script>",
  },
  {
    question: "What syntax accesses an object method?",
    answers: [
      "a. const methodName = objectName",
      "b. methodName.objectName()",
      "c. objectName.methodName()",
    ],
    correctAnswer: "c. objectName.methodName()",
  },
  {
    question: "Which is not a primitive type in JavaScript?",
    answers: ["a. number", "b. boolean", "c. operator"],
    correctAnswer: "c. operator",
  },
  {
    question: "What does the .stopPropagation() method do?",
    answers: [
      "a. prevents event bubbling",
      "b. prevents event default actions",
      "c. prevents JS from creating HTML elements",
    ],
    correctAnswer: "a. prevents event bubbling",
  },
  {
    question:
      "What must always be done after getting an item from local storage?",
    answers: [
      "a. parse the string values",
      "b. stringify the values",
      "c. push values into an array",
    ],
    correctAnswer: "a. parse the string values",
  },
];

let isGameCompleted = false;

// set timer start value
let counter = 5;

// set questions array index number
let questionIndex = 0;

// store current question value
let currentQuestion = questionsArray[questionIndex];

// TARGET STATIC HTML ELEMENTS
const counterSpan = document.querySelector("#timer");
const headerContainer = document.querySelector(".header-container");
const startButton = document.querySelector("#start-button");
const startContainer = document.querySelector("#start-container");
const mainContainer = document.querySelector("#main-container");
// high scores html
const clearScoresBtn = document.querySelector("#clear-scores");
const highScoresList = document.querySelector("#high-scores-list");

// render question container
const renderQuestion = function () {
  // get question
  const question = questionsArray[questionIndex];

  // target questionContainer for removal and click events
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question-container");
  questionContainer.setAttribute("data-answer", question.correctAnswer);

  //   create buttons div
  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "answer-buttons");

  //   create answer buttons and append with for each
  const renderAnswers = function (eachAnswer, index) {
    const answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answerButton");
    answerButton.setAttribute("id", index);
    answerButton.setAttribute("data-option", eachAnswer);
    answerButton.textContent = eachAnswer;
    buttonContainer.appendChild(answerButton);
  };

  question.answers.forEach(renderAnswers);
  currentQuestion = questionsArray[questionIndex];

  //   create question text
  const questionText = document.createElement("h2");
  questionText.setAttribute("id", "question-text");
  questionText.textContent = currentQuestion.question;

  //  append 2 children to questionContainer
  questionContainer.appendChild(questionText);
  questionContainer.appendChild(buttonContainer);

  // verify answer click event
  questionContainer.addEventListener("click", verifyAnswer);

  mainContainer.appendChild(questionContainer);
};

const verifyAnswer = function (event) {
  const currentTarget = event.currentTarget;
  const target = event.target;

  const userClicked = target.getAttribute("data-option");

  const correctAnswer = currentTarget.getAttribute("data-answer");

  if (questionIndex === questionsArray.length - 1) {
    isGameCompleted = true;
    renderScoreForm();
    return;
  }

  //   check if click is on the correct answer button
  if (userClicked === correctAnswer) {
    //   if true then increment questionIndex value
    if (questionIndex <= questionsArray.length - 1) {
      removeQuestion();
      questionIndex += 1;
      renderQuestion();
    }
    // deduct time
  } else {
    counter -= 5;
  }
};

// remove question container
const removeQuestion = function () {
  document.getElementById("question-container").remove();
};

// renderGameOver
const renderGameOver = function () {
  counterSpan.textContent = 0;
  removeQuestion();

  // render link to start
  const newStartLink = document.createElement("a");
  newStartLink.setAttribute("href", "./index.html");
  newStartLink.textContent = "Start Quiz";

  //   render new start button, append anchor
  const newStartButton = document.createElement("button");
  newStartButton.setAttribute("id", "new-start-button");
  newStartButton.setAttribute("class", "button");
  newStartButton.appendChild(newStartLink);

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

// renderScoreForm
const renderScoreForm = function () {
  if (isGameCompleted) {
    //   remove question container
    removeQuestion();

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

    // set submit score click event listener
    formButton.addEventListener("click", submitScore);

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
  }
};

const submitScore = function () {
  // get input value (initials)
  let winnerInitials = document.querySelector("#initials").value;

  let endScore = counter;

  //   get initials and score from LS
  const initialsFromLS = JSON.parse(localStorage.getItem("initials"));
  const scoreFromLS = JSON.parse(localStorage.getItem("score"));

  //   if empty, set arrays for initials and score in LS
  if (!initialsFromLS) {
    // set into LS
    localStorage.setItem("initials", JSON.stringify([winnerInitials]));
  } else {
    // set initials input to LS
    initialsFromLS.push(winnerInitials);
    localStorage.setItem("initials", JSON.stringify(initialsFromLS));
  }

  if (!scoreFromLS) {
    // set into LS
    localStorage.setItem("score", JSON.stringify([endScore]));
  } else {
    // set score value to LS
    scoreFromLS.push(endScore);
    localStorage.setItem("score", JSON.stringify(scoreFromLS));
  }

  const createScoresList = function (eachInitials, initialsIndex) {
    const scoreListItem = document.createElement("li");
    scoreListItem.setAttribute("class", "scores-list-item");
    scoreListItem.textContent = eachInitials;

    highScoresList.appendChild(scoreListItem);
  };

  //   insert forEach on initialsFromLS
  initialsFromLS.forEach(createScoresList());

  return;
};

const renderHighScores = function () {
  // get scores & initials from LS
  //   print to page
  return;
};

// clear high scores from local storage and page
const clearHighScores = function () {
  console.log("clear scores");

  //   clear local storage
  //   event.preventDefault();
  //   localStorage.clear();

  //   remove scores from page
};

const startTimer = function () {
  // set timer & display
  const timerTick = function () {
    if (counter <= 0 && !isGameCompleted) {
      clearInterval(timer);
      renderGameOver();
    }

    if (counter === 0 || isGameCompleted) {
      clearInterval(timer);
    }

    if (counter > 0 && !isGameCompleted) {
      counter -= 1;
      counterSpan.textContent = counter;
    }
  };

  // timer
  const timer = setInterval(timerTick, 1000);
};

// start quiz
const startQuiz = function () {
  startContainer.remove();
  startTimer();
  renderQuestion();
};

// startQuiz click event
startButton.addEventListener("click", startQuiz);

// clear scores click event
// clearScoresBtn.addEventListener("click", clearHighScores);
