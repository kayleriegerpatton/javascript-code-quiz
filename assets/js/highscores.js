const clearScoresBtn = document.querySelector("#clear-scores");
const highScoresList = document.querySelector("#high-scores-list");

const renderHighScores = function () {
  // get scores & initials from LS
  //   print to page
  return;
};

// clear high scores
const clearHighScores = function () {
  //   clear local storage
  localStorage.clear();

  //   remove scores list items from page
};

// clear scores click event
clearScoresBtn.addEventListener("click", clearHighScores);
