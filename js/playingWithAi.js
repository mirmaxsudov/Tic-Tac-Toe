const backIcon = document.querySelector(".back-icon");
const backBtn = document.querySelector(".back-btn");
const pauseIcon = document.querySelector(".pause-icon");
const resumeBtn = document.querySelector(".resume-btn");
// Modal & Overlay
const pauseModal = document.querySelector(".pause-modal");
const overlayPause = document.querySelector(".overlay-pause");

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
