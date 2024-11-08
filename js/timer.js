const hour = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");

setInterval(() => {
  increase();
}, 1000);

function increase() {
  const currentDate = new Date();
  hour.innerHTML =
    currentDate.getHours() < 10
      ? "0" + currentDate.getHours()
      : currentDate.getHours();
  minutes.innerHTML =
    currentDate.getMinutes() < 10
      ? "0" + currentDate.getMinutes()
      : currentDate.getMinutes();
}
