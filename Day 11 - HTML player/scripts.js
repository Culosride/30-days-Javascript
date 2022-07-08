const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function btnUpdate() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.innerText = icon;
}

function skip() {
  const skip = this.dataset.skip
  video.currentTime += parseFloat(skip)
}

function rangeUpdate() {
  video[this.name] = this.value
}

function videoProgress() {
  progressPerc = video.currentTime/video.duration * 100;
  progressBar.style.setProperty('flex-basis', `${progressPerc}%`);
}

let mouseDown = false;
function setProgress(e) {
  video.currentTime = e.offsetX/640*video.duration
}

skipButtons.forEach(btn => btn.addEventListener("click", skip))
video.addEventListener("pause", btnUpdate)
video.addEventListener("play", btnUpdate)

video.addEventListener("click", togglePlay)
toggle.addEventListener("click", togglePlay)

video.addEventListener("timeupdate", videoProgress)
video.addEventListener("timeupdate", videoProgress)

progress.addEventListener("click", setProgress)

progress.addEventListener("mousemove", (e) => mouseDown && setProgress(e))
progress.addEventListener("mouseup", () => mouseDown = false)
progress.addEventListener("mousedown", () => mouseDown = true)


ranges.forEach(range => range.addEventListener("change", rangeUpdate))
ranges.forEach(range => range.addEventListener("mousemove", rangeUpdate))
