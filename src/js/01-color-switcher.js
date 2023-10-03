const elements = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

elements.startBtn.addEventListener('click', onStartBtnClick);
elements.stopBtn.addEventListener('click', onStopBtnClick);

let timeId = null;
let startBtnActive = false;

elements.stopBtn.disabled = true;

function onStartBtnClick() {
  timeId = setInterval(changeColor, 1000);
  elements.stopBtn.disabled = false;

  elements.startBtn.disabled = true;
}

function onStopBtnClick() {
  clearInterval(timeId);

  elements.startBtn.disabled = false;
  elements.stopBtn.disabled = true;
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
