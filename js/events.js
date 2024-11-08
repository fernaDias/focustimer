import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
} from "./elements.js";

export default function ({ controls, timer, sound }) {
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
    sound.bgAudio.play();
  });
  
  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOff.classList.remove("hide");
    buttonSoundOn.classList.add("hide");
    sound.bgAudio.pause();
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
}
