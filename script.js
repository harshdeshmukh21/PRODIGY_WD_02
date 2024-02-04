let timer;
let isRunning = false;
let elapsedTime = 0;
let lapTimes = [];

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function () {
      elapsedTime++;
      updateDisplay();
    }, 1000);
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  lapTimes = [];
  updateDisplay();
}

function addLapTime() {
  if (isRunning) {
    lapTimes.push(elapsedTime);
    const lapTime = document.createElement("p");
    lapTime.textContent = `Lap ${lapTimes.length}: ${formatTime(elapsedTime)}`;
    document.body.appendChild(lapTime);
    document.querySelectorAll("p").forEach((paragraph) => {
      paragraph.style.textAlign = "center";
    });
  }
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", addLapTime);
