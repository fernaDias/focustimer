import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countDown();
  sound.pressButton();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
  sound.pressButton();
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  sound.pressButton();
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
  sound.bgAudio.pause();
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOff.classList.remove("hide");
  buttonSoundOn.classList.add("hide");
  sound.bgAudio.play();
});

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }
  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});
