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
  {
    question: "What does the 'return' keyword do?",
    answers: [
      "a. brings data out of the function to make it accessible",
      "b. returns to the beginning of the function block",
      "c. retrieves unreachable code and creates a global variable",
    ],
    correctAnswer: "a. brings data out of the function to make it accessible",
  },
  {
    question: "Which of these is not a valid variable name in JavaScript?",
    answers: ["a. myVariable", "b. second_variable", "c. 3rdVariable"],
    correctAnswer: "c. 3rdVariable",
  },
  {
    question: "Which is the correct way to write a JS array?",
    answers: [
      "a. const myArray = [0: 'arrayItem1', 1: 'arrayItem2', 2: 'arrayItem3']",
      "b. const myArray = ['arrayItem1', 'arrayItem2', 'arrayItem3']",
      "c. const myArray = {'arrayItem1', 'arrayItem2', 'arrayItem3'}",
    ],
    correctAnswer:
      "b. const myArray = ['arrayItem1', 'arrayItem2', 'arrayItem3']",
  },
];

let isGameCompleted = false;

// set timer start value
let counter = 5 * questionsArray.length;

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
    if (userClicked === correctAnswer) {
      isGameCompleted = true;
      renderScoreForm();
    }
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
  newStartLink.textContent = "Try Again";

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
    // scoresLink.setAttribute("href", "./highscores.html");
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
    formDiv.append(scoreTitle, scoreText, form);

    //   append div to main
    mainContainer.appendChild(formDiv);
  }
};

const submitScore = function () {
  let initials = document.getElementById("initials").value;

  // validate input value is not empty
  if (initials === "hi") {
    // get form input value (initials)
    let winnerInitials = document
      .getElementById("initials")
      .value.toUpperCase();

    // get score value from counter
    let finalScore = counter;

    // create winner details object for LS
    const winnerDetails = {
      score: finalScore,
      initials: winnerInitials,
    };

    // get from LS
    const highScoresFromLS = JSON.parse(localStorage.getItem("highScores"));
    if (!highScoresFromLS) {
      // declare data for LS
      const highScores = [winnerDetails];

      // set in LS
      localStorage.setItem("highScores", JSON.stringify(highScores));
    } else {
      const myScoresArray = highScoresFromLS;
      // push new data into array
      myScoresArray.push(winnerDetails);
      myScoresArray.sort((a, b) => b.score - a.score);

      // set array data in LS
      localStorage.setItem("highScores", JSON.stringify(myScoresArray));
    }
    window.location.href = "highscores.html";
  } else {
    alert("Please enter your initials.");
  }
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
