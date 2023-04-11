const logoutEle = document.querySelector(".logout_timer");

let time = 7200000;

function logoutHandler() {
  const hours = Math.trunc((time % (1000 * 60 * 60 * 2)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, 0);
  const min = Math.trunc((time % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, 0);
  const sec = Math.trunc(time % 60)
    .toString()
    .padStart(2, 0);
  logoutEle.textContent = `${hours} : ${min} : ${sec}`;

  if (time === 0) {
    clearInterval(timer);
  }
  time--;
}

logoutHandler();
const timer = setInterval(logoutHandler, 1000);
