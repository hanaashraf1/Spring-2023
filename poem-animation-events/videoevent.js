const EL_video = document.querySelector("#video");
const EL_play = document.querySelector("#play");

EL_play.addEventListener("click", () => {
  const isPaused = EL_video.paused;
  EL_video[isPaused ? "play" : "pause"]();
  EL_video.classList.toggle("u-none", !isPaused);
});