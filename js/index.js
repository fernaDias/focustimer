import resetControls from "./controls.js"; 
import "./timers.js";

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut;



buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  countDown();
});

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener("click", function () {
  resetControls();
  resetTimer()
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOff.classList.remove("hide");
  buttonSoundOn.classList.add("hide");
});

buttonSet.addEventListener("click", function () {
 let  newMminutes = prompt("Quantos minutos?")
  if (!newMminutes){
    resetTimer()
    return
  }
  minutes = newMminutes
  updateTimerDisplay(minutes, 0);
});
