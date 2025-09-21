const countDownDate = new Date("Nov 05, 2025 00:00:00").getTime();
const disDays = document.querySelector("#days p");
const disHours = document.querySelector("#hours p");
const disMinutes = document.querySelector("#minutes p");
const disSeconds = document.querySelector("#seconds p");

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  disDays.textContent = days;
  disHours.textContent = hours;
  disMinutes.textContent = minutes;
  disSeconds.textContent = seconds;
  if (distance < 0) {
    clearInterval();
    disDays.textContent = "00";
    disHours.textContent =  "00";
    disMinutes.textContent = "00";
    disSeconds.textContent =  "00";
  }
}, 1000);
