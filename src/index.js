import { Clock } from './js/Clock';

window.onload = function() {
  setInterval(getClock, 1000);

  getCalendar();
}

const getClock = () => {
  const clock = document.querySelector(".clock");
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

const getCalendar = () => {
  const calendar = document.querySelector(".calendar");
  const today = new Date();
  const year = String(today.getFullYear());
  calendar.innerText = `${year}`;
};