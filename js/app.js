const playBTns = document.querySelectorAll(".play-btn");
const playAndPauseBTn = document.querySelector(".play-button");
const forwardBtn = document.querySelector(".forward");
const backForwardBtn = document.querySelector(".back-forward");
const musicName = document.querySelector(".music-name");
const artistName = document.querySelector(".artist");
playBTns.forEach(function (playBTn) {
  playBTn.addEventListener("click", function (event) {
    const selectedMusic = event.target;
    const selectedMusicSrc = selectedMusic.getAttribute("data-src");
playBTn.insertAdjacentHTML(
  "beforeend",
  `<audio src="${selectedMusicSrc}"></audio>`
);
const audioElem = playBTn.querySelector('audio[src="' + selectedMusicSrc + '"]');
console.log(selectedMusicSrc);
console.log(audioElem);

  audioElem.play();

  });
});
