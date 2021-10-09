const clearScoresBtn = document.querySelector("#clear-scores");
const highScoresList = document.querySelector("#high-scores-list");

// get scores/initials from LS
// create & append to high scores list

// clear high scores
const clearHighScores = function () {
  //   clear local storage
  localStorage.clear();

  //   remove scores list items from page
  highScoresList.innerHTML = "";
};

// load event listener
// document.addEventListener("load", renderScoresList);

// clear scores click event
clearScoresBtn.addEventListener("click", clearHighScores);
