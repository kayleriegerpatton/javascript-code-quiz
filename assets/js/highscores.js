const clearScoresBtn = document.querySelector("#clear-scores");
const highScoresList = document.querySelector("#high-scores-list");

// get scores/initials from LS (array of objects)
const getScoreData = function () {
  const highScoresFromLS = JSON.parse(localStorage.getItem("highScores"));
  console.log(highScoresFromLS);

  //   const getWinnerDetails = function () {};

  //   highScoresList.forEach(getWinnerDetails);
};

// get score value from array object & declare as variable?

// get initials string from array object & declare as variable?

// create & append to high scores list
// const renderScoresList = function (myScoresArray) {
//     const constructScoresList = function () {
//       const scoreListItem = document.createElement("li");
//       scoreListItem.setAttribute("class", "scores-list-item");
//       scoreListItem.textContent = ;
//       highScoresList.appendChild(scoreListItem);
//     };
//     highScoresList.innerHTML = "";
// };

// clear high scores
const clearHighScores = function () {
  //   clear local storage
  localStorage.clear();

  //   remove scores list items from page
  highScoresList.innerHTML = "";
};

// window load event listener
window.addEventListener("load", getScoreData);
// window.addEventListener("load", renderScoresList);

// clear scores click event
clearScoresBtn.addEventListener("click", clearHighScores);
