const playBtns = document.querySelectorAll(".play-btn");
const music = document.querySelector("audio");
const playIcon = document.querySelector(".play-icon");
const playButton = document.querySelector(".play-button");
const volumeCard = document.querySelector(".volume-card");
const volume = document.querySelector(".volume");
const musicCard = document.querySelectorAll(".music-card");
const musicInfo = document.querySelectorAll(".music-card main p");
const currentTime = document.querySelector(".current-time")
const processBar = document.querySelector(".process-bar")
const musicName = document.querySelector(".music-name")

let isPlay = false;
let activePlayBtn = null

function seekAudio(e) {
  const barWidth = processBar.clientWidth
  const clickX = e.offsetX
  const percent = (barWidth / clickX)
  music.currentTime = percent * music.duration
}

function showCurrentTime() {
  music.addEventListener("timeupdate", () => {
    const percent = (music.currentTime / music.duration) * 100
    currentTime.style.width = `${percent}%`
  })
}



playBtns.forEach(function (playBtn) {
  playBtn.addEventListener("click", function (event) {
    const mainMusicSrc = event.target.dataset.src;
    music.setAttribute("src", mainMusicSrc);
    music.play();
    isPlay = true;
    playIcon.classList.remove("fa-play")
    playIcon.classList.add("fa-pause")

    const musicdData = playBtn.parentElement.parentElement.parentElement.querySelector("main p")
    // console.log(musicdData)
    musicName.innerHTML = musicdData.innerHTML

    playBtns.forEach(function (playBtn) {
      const playOrPauseIcon = playBtn.querySelector("i");
      playOrPauseIcon.classList.remove("fa-pause");
      playOrPauseIcon.classList.add("fa-play");
    });

    const playOrPauseIcon = playBtn.querySelector("i");
    playOrPauseIcon.classList.remove("fa-play");
    playOrPauseIcon.classList.add("fa-pause");
  });
});

playButton.addEventListener("click", function () {
  if (playIcon.className.includes("fa-play")) {
    music.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");

  } else {
    music.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }


  const musicPauseIcon = document.querySelector(".play-btn .fa-pause");
  if (musicPauseIcon) {
    musicPauseIcon.classList.remove("fa-pause");
    musicPauseIcon.classList.add("fa-play");
  }
  else {
    let playMusicIcon = document.querySelectorAll(".play-btn .fa-pause");
    playMusicIcon.forEach(function (icon) {
      icon.classList.remove("fa-play")
      icon.classList.add("fa-pause")
    })
  }
});

volumeCard.addEventListener("click", function (event) {
  music.volume = event.offsetX / 100;
  volume.style.width = `${event.offsetX}px`;
});

// * listeners
playBtns.forEach(function (playBtn) {
  playBtn.addEventListener("click", showCurrentTime)
})

processBar.addEventListener("clikc", seekAudio)


