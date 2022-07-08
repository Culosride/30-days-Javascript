const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const toggle = player.querySelector(".toggle")

console.dir(video)
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

video.addEventListener("pause", togglePlay)
video.addEventListener("play", togglePlay)
