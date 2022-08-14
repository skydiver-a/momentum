import { Clock } from './js/Clock';

window.onload = function() {
  setInterval(() => {
    getClock();
    getCalendar();
    showGreeting();
  }, 1000);

  getName();
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
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const calendar = document.querySelector(".calendar");
  const today = new Date();
  const year = String(today.getFullYear());
  const month = today.getMonth();
  const date = String(today.getDate());
  const day = today.getDay();
  calendar.innerText = `${week[day]}, ${months[month]} ${date}, ${year}`;
};

const showGreeting = () => {
  const greeting = document.querySelector(".greeting");
  let hour = new Date().getHours();
  if (hour < 12 ) {
    greeting.innerText = `Good morning. `;
  } else if (hour < 18) {
    greeting.innerText = `Good afternoon, `;
  } else {
    greeting.innerText = `Good evening, `;
  }
};

const getName = () => {};