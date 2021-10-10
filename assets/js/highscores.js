const clearScoresBtn = document.querySelector("#clear-scores");
const highScoresList = document.querySelector("#high-scores-list");

// get scores/initials from LS

// create & append to high scores list
const renderScoresList = function (initialsFromLS) {
  const constructScoresList = function (eachInitials, initialsIndex) {
    const scoreListItem = document.createElement("li");
    scoreListItem.setAttribute("class", "scores-list-item");
    scoreListItem.textContent = eachInitials;
    highScoresList.appendChild(scoreListItem);
  };
  highScoresList.innerHTML = "";

  //   insert forEach on initialsFromLS
  initialsFromLS.forEach(constructScoresList);
};

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
