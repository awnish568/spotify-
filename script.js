console.log("welcome to spotify");
// initialise the variables
let songIndex = 0;
let audioElement = new Audio("/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementsByTagName("img");
let names = document.getElementsByClassName("songname");
let items = document.getElementsByClassName("songItemPlay");
console.log(gif);
console.log(names);
console.log(items);
console.log(audioElement.src);
let songs = [
  { songName: "ringtone1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", },
  { songName: "ringtone2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", },
  { songName: "ringtone3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", },
  { songName: "ringtone4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", },
  { songName: "ringtone5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", },
  { songName: "ringtone6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", },
];
console.log(songs);

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif[7].style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif[7].style.opacity = 0;
  }
});

function changeicon() {
  for (let j = 0; j < 6; j++) {
    items[j].classList.remove("fa-circle-pause");
    items[j].classList.add("fa-circle-play");
  }
}

for (let i = 0; i < 6; i++) {
  items[i].addEventListener("click", () => {
    changeicon();
    console.log(items[i].id)
    // let index = items[i].id;
    songIndex = parseInt(items[i].id)
    // console.log(index);
    items[i].classList.remove("fa-circle-play");
    items[i].classList.add("fa-circle-pause");
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif[7].style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });

}
// listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

for (let i = 1; i <= 6; i++) {
  gif[i].src = songs[i - 1].coverPath;
  names[i - 1].innerText = songs[i - 1].songName;
}

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 9) {
    songIndex = 0
  }
  else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0
  }
  else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})





















// for (let i = 1; i <= 6; i++) {
// songItemPlay.addEventListener("click", () => {
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     songItemPlay.classList.remove("fa-circle-play");
//     songItemPlay.classList.add("fa-circle-pause");
//     gif[7].style.opacity = 1;
//   } else {
//     audioElement.pause();
//     songItemPlay.classList.remove("fa-circle-pause");
//     songItemPlay.classList.add("fa-circle-play");
//     gif[7].style.opacity = 0;
//   }
// });
// }


// audio = new Audio("start url");
// audioElement.addEventListener('ended',function(){
//         audioElement.src = "new url";
//         audioElement.pause();
//         audioElement.load();
//         audioElement.play();
// });
