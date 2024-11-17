const backIcon = document.querySelector(".back-icon");
const backBtn = document.querySelector(".back-btn");
const pauseIcon = document.querySelector(".pause-icon");
const resumeBtn = document.querySelector(".resume-btn");

const pauseModal = document.querySelector(".pause-modal");
const overlayPause = document.querySelector(".overlay-pause");

const oImageLink = "../images/O.svg";
const xImageLink = "../images/X.svg";

const headerFooterImgLink = document.querySelector(".header__footer-img");
const headerFooterText = document.querySelector(".header__footer-text");

const ticTacToe = document.querySelector(".tic-tac-toe");

let TURN = "X";
let isAITurn = false;
let isGameOver = false;

window.onload = () => {
  initializeGame();
  attachNavigationListeners();
  attachPauseResumeListeners();
  attachTicTacToeEventListeners();
};

function initializeGame() {
  updateHeaderFooter("Your Turn", xImageLink);
}

function toggleTurn() {
  TURN = TURN === "X" ? "O" : "X";
}

function updateHeaderFooter(text, imgSrc) {
  headerFooterText.textContent = text;
  headerFooterImgLink.src = imgSrc;
}

function ticTacToeItemHandler(ticTacToeItem) {
  if (isAITurn || isGameOver) return;

  const isUsed = ticTacToeItem.getAttribute("data-used") !== "NONE";

  if (isUsed) {
    alert("Already used");
    return;
  }

  if (TURN === "X") {
    turnX(ticTacToeItem);
    if (checkWin("X")) {
      endGame("X");
      return;
    }
    if (isBoardFull()) {
      endGame("DRAW");
      return;
    }
    toggleTurn();
    updateHeaderFooter("AI Turn", oImageLink);
    setAITurn();
  }
}

function setAITurn() {
  isAITurn = true;

  setTimeout(() => {
    const unselectedItems = Array.from(ticTacToe.children).filter(
      (item) => item.getAttribute("data-used") === "NONE"
    );

    if (unselectedItems.length > 0) {
      const randomItem =
        unselectedItems[Math.floor(Math.random() * unselectedItems.length)];
      turnO(randomItem);
      if (checkWin("O")) {
        endGame("O");
        return;
      }
      if (isBoardFull()) {
        endGame("DRAW");
        return;
      }
      toggleTurn();
      updateHeaderFooter("Your Turn", xImageLink);
    }

    isAITurn = false;
  }, Math.random() * 500 + 500);
}

function turnO(ticTacToeItem) {
  updateTicTacToeItem(ticTacToeItem, oImageLink, "O");
}

function turnX(ticTacToeItem) {
  updateTicTacToeItem(ticTacToeItem, xImageLink, "X");
}

function updateTicTacToeItem(ticTacToeItem, imgLink, player) {
  ticTacToeItem.innerHTML = `<img src="${imgLink}" alt="Img" class="tic-tac-toe-item-img" />`;
  ticTacToeItem.setAttribute("data-used", player);
}

function attachTicTacToeEventListeners() {
  ticTacToe.addEventListener("click", (e) => {
    const target = e.target.closest(".tic-tac-toe-item");
    if (target) ticTacToeItemHandler(target);
  });
}

function showPauseModal() {
  toggleModalVisibility(false);
}

function hidePauseModal() {
  toggleModalVisibility(true);
}

function toggleModalVisibility(isHidden) {
  pauseModal.classList.toggle("d-none", isHidden);
  overlayPause.classList.toggle("d-none", isHidden);
}

function attachNavigationListeners() {
  [backIcon, backBtn].forEach((btn) => {
    btn.addEventListener("click", () => (window.location.href = "/"));
  });

  backIcon.addEventListener("dblclick", () => (window.location.href = "/"));
}

function attachPauseResumeListeners() {
  pauseIcon.addEventListener("click", showPauseModal);
  resumeBtn.addEventListener("click", hidePauseModal);
}

function isBoardFull() {
  const board = Array.from(ticTacToe.children).map((cell) =>
    cell.getAttribute("data-used")
  );
  return board.every((cell) => cell !== "NONE");
}

function checkWin(player) {
  const board = Array.from(ticTacToe.children).map((cell) =>
    cell.getAttribute("data-used")
  );

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) =>
    combination.every((index) => board[index] === player)
  );
}

function endGame(result) {
  isGameOver = true;
  if (result === "DRAW") {
    headerFooterText.textContent = "It's a Draw!";
    headerFooterImgLink.src = "../images/draw.png ";
    headerFooterImgLink.style = "width: 50px; height: 50px;";
  } else {
    headerFooterText.textContent = result === "X" ? "You Win!" : "AI Wins!";
  }
}
