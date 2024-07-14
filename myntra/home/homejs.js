
let timer = document.getElementById("timer");
let time = 4322; // 07 H: 03 M: 22 s
let interval = setInterval(function() {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  timer.textContent = `${hours} H: ${minutes} M: ${seconds} s`;
  time--;
  if (time <= 0) {
    clearInterval(interval);
    timer.textContent = "Contest Ended!";
  }
}, 1000);