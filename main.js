const selectionBtns = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");
const resetBtn = document.querySelector(".reset-btn");

const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "🤚",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];

selectionBtns.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", (e) => {
    const selectionName = selectionBtn.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("results-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

resetBtn.addEventListener("click", () => {
  console.log("restart");
});
