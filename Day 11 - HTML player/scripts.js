const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const toggle = player.querySelector(".toggle")

console.dir(video)
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function btnUpdate() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

video.addEventListener("pause", btnUpdate)
video.addEventListener("play", btnUpdate)
toggle.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)
