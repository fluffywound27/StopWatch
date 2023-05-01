/*let seconds = 55;
let minutes = 0;

const displayElem = document.querySelector('.js-stopwatch');
displayElem.innerHTML = '00:00';

setInterval(() => {
  const displayElem = document.querySelector('.js-stopwatch');
  seconds++;
    displayElem.innerHTML = `0${minutes}:0${seconds}`;

  if (seconds === 60) {
      seconds = 0;
      minutes++;
      displayElem.innerHTML = `0${minutes}:00`;
  } else if (seconds >= 10) {
      displayElem.innerHTML = `0${minutes}:${seconds}`;
  }
}, 1000);
*/

let secondR = 0;
let secondL = 0;
let minuteR = 0;
let minuteL = 0;

let isTimerRunning = false;
let intervalId;

const displayElem = document.querySelector('.js-stopwatch');
displayElem.innerHTML = `${minuteL}${minuteR}:${secondL}${secondR}`;

const timerButtonElem = document.querySelector('.js-stopwatch-button');

const resetButtonElem = document.querySelector('.js-reset-button');

timerButtonElem.addEventListener('click', () => {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timerButtonElem.innerHTML = 'Stop'
    timer();
  } else {
    isTimerRunning = false;
    timerButtonElem.innerHTML = 'Start';
    clearInterval(intervalId)
  }
});

resetButtonElem.addEventListener('click', () => {
  clearInterval(intervalId)
  secondR = 0;
  secondL = 0;
  minuteR = 0;
  minuteL = 0;
  displayElem.innerHTML = `${minuteL}${minuteR}:${secondL}${secondR}`;
  timerButtonElem.innerHTML = 'Start';
  });

function timer() {

if (isTimerRunning) {
intervalId = setInterval(() => {
  secondR++;
  if (secondR > 9) {
    secondR = 0;
    secondL++;
  }
  if (secondL > 5) {
    secondL = 0;
    minuteR++;
  }
  if (minuteR > 9 ) {
    minuteR = 0;
    minuteL++;
  }
  if (minuteL > 5) {
    minuteL = 0;
  }
  displayElem.innerHTML = `${minuteL}${minuteR}:${secondL}${secondR}`;
}, 1000);
};
}