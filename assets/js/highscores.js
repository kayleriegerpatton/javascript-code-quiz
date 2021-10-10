const clearScoresBtn = document.querySelector("#clear-scores");
const highScoresList = document.querySelector("#high-scores-list");

// get scores/initials from LS
const getScoreData = function () {
  const highScoresFromLS = JSON.parse(localStorage.getItem("highScores"));
  console.log(highScoresFromLS);
};

// create & append to high scores list
const renderScoresList = function (myScoresArray) {
  const constructScoresList = function (eachInitials, initialsIndex) {
    const scoreListItem = document.createElement("li");
    scoreListItem.setAttribute("class", "scores-list-item");
    scoreListItem.textContent = eachInitials;
    highScoresList.appendChild(scoreListItem);
  };
  highScoresList.innerHTML = "";

  //   insert forEach on initialsFromLS
  myScoresArray.forEach(constructScoresList);
};

// clear high scores
const clearHighScores = function () {
  //   clear local storage
  localStorage.clear();

  //   remove scores list items from page
  highScoresList.innerHTML = "";
};

// window load event listener
window.addEventListener("load", getScoreData);

// clear scores click event
clearScoresBtn.addEventListener("click", clearHighScores);
