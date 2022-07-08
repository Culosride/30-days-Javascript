const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

console.dir(video)
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function btnUpdate() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.dir(toggle)
  toggle.innerText = icon;
}

function skip() {
  const skip = this.dataset.skip
  video.currentTime += parseFloat(skip)
}

video.addEventListener("pause", btnUpdate)
video.addEventListener("play", btnUpdate)
video.addEventListener("click", togglePlay)
toggle.addEventListener("click", togglePlay)
skipButtons.forEach(btn => btn.addEventListener("click", skip))
