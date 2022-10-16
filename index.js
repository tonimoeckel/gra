let currentPosition = 0;
let timer;

function animateScript(index) {
  const size = 500;
  const col = index % 6;
  const row = Math.floor(index / 6);
  console.log(index, row, col);
  console.log(`${size * col}px ${size * row}px`);
  document.getElementById("image").style.backgroundPosition = `-${
    size * col
  }px -${size * row}px`;
}

animateScript(currentPosition);

function start() {
  timer = setInterval(() => {
    currentPosition = (currentPosition + 1) % 24;
    animateScript(currentPosition);
  }, 500);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

window.addEventListener("keyup", (evt) => {
  if (evt.key === "a") {
    if (timer) stop();
    else start();
  }
  if (evt.key === "ArrowRight") {
    currentPosition = (currentPosition + 1) % 24;
    animateScript(currentPosition);
  }
  if (evt.key === "ArrowLeft") {
    if (currentPosition === 0) currentPosition = 24;
    currentPosition = (currentPosition - 1) % 24;
    animateScript(currentPosition);
  }
});
