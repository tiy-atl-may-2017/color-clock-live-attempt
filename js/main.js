let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let bg = document.querySelector("body");

let time = function() {
  let currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();

  if (h < 10) {
    hours.innerHTML = "0" + h + ": ";
  } else {
    hours.innerHTML = h + ": ";
  }

  if (m < 10) {
    minutes.innerHTML = "0" + m + ": ";
  } else {
    minutes.innerHTML = m + ": ";
  }

  if (s < 10) {
    seconds.innerHTML = "0" + s;
  } else {
    seconds.innerHTML = s;
  }

  // Attempt at background color change (not working)
  // bg.style.background = "#" + h + m + s;
  // console.log("#" + h + m + s);
}

setInterval(time, 1000);
time();
