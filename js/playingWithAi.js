const backIcon = document.querySelector(".back-icon");
const backBtn = document.querySelector(".back-btn");
const pauseIcon = document.querySelector(".pause-icon");
const resumeBtn = document.querySelector(".resume-btn");
// Modal & Overlay
const pauseModal = document.querySelector(".pause-modal");
const overlayPause = document.querySelector(".overlay-pause");

// Link of images
const oImageLink = "../images/O.svg";
const xImageLink = "../images/X.svg";

// header footer img
const headerFooterImgLink = document.querySelector(".header__footer-img");
const headerFooterText = document.querySelector(".header__footer-text");

// base
const ticTacToe = document.querySelector(".tic-tac-toe");

let TURN = "X";

window.onload = () => {
  firstlyStart();
  giveAddEventListenerToTicTacToe();
};

function ticTacToeItemHandler(ticTacToeItem) {
  const ticTacToeItemTargetId = ticTacToeItem.getAttribute("data-target-id");
  const ticTacToeItemUsed = ticTacToeItem.getAttribute("data-used");

  console.log(ticTacToeItemTargetId, ticTacToeItemUsed);

  if (ticTacToeItemUsed !== "NONE") {
    alert("Already used");
    return;
  }
  toggleTurn();

  if (TURN === "X") {
    TURN = "O";
    headerFooterImgLink.src = oImageLink;
    headerFooterText.textContent = "AI Turn";
    turnX(ticTacToeItem);
  } else if (TURN === "O") {
    TURN = "X";
    turnO(ticTacToeItem);
    headerFooterImgLink.src = xImageLink;
    headerFooterText.textContent = "Your Turn";
  }

  ticTacToeItem.classList.add("smooth-transition-turn");
}

function toggleTurn() {}

function turnO(ticTacToeItem) {
  ticTacToeItem.innerHTML = `<img src="${oImageLink}" alt="Img" class="tic-tac-toe-item-img" />`;
  ticTacToeItem.setAttribute("data-used", "O");
}

function turnX(ticTacToeItem) {
  ticTacToeItem.innerHTML = `<img src="${xImageLink}" alt="Img" class="tic-tac-toe-item-img" />`;
  ticTacToeItem.setAttribute("data-used", "X");
}

function giveAddEventListenerToTicTacToe() {
  ticTacToe.addEventListener("click", (e) => {
    if (e.target.classList.contains("tic-tac-toe-item-img")) {
      ticTacToeItemHandler(e.target.parentElement);
      return;
    }

    if (e.target.classList.contains("tic-tac-toe-item")) {
      ticTacToeItemHandler(e.target);
      return;
    }
  });
}

function firstlyStart() {
  headerFooterImgLink.src = xImageLink;
  headerFooterText.textContent = "Your Turn";
}

backIcon.addEventListener("dblclick", () => {
  window.location.href = "/";
});

backBtn.addEventListener("click", () => {
  window.location.href = "/";
});

pauseIcon.addEventListener("click", () => showPauseModal());

resumeBtn.addEventListener("click", () => hidePauseModal());

function showPauseModal() {
  pauseModal.classList.remove("d-none");
  overlayPause.classList.remove("d-none");
}

function hidePauseModal() {
  pauseModal.classList.add("d-none");
  overlayPause.classList.add("d-none");
}
