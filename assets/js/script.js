// GLOBAL VARIABLES

const timeRemaining = 30;
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

// target start quiz button
const startButton = document.querySelector("#start-button");

// target start-container div for removal
const startContainer = document.querySelector("#start-container");

// FUNCTION DECLARATIONS/EXECUTION
// start quiz
const startQuiz = function () {
  // remove div card
  startContainer.remove();
  console.log("removed starting div");
  // start timer
  // render question card
  return;
};
startButton.addEventListener("click", startQuiz);
