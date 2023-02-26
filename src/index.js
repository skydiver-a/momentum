window.onload = function() {
  setInterval(() => {
    getClock();
    getCalendar();
    showGreeting();
  }, 1000);

  addEnterNameClickHandler();

  addFocusClickHandler();
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
  const greeting = document.querySelector(".greeting-content");
  let hour = Math.floor((new Date().getHours()) / 6);
  let part = '';
  switch (hour) {
    case 0:
      part = "night";
      break;
    case 1:
      part = "morning";
      break;
    case 2:
      part = "afternoon";
      break;
    case 3:
      part = "evening";
      break;
    default:
      break;
  }
  greeting.innerText = `Good ${part}, `;
};

const addEnterNameClickHandler = () => {
  const form = document.forms.name;
  const input = form.elements.user;
  const defaultValue = "[enter name]";
  input.addEventListener("blur", () => {
    resizeInput(input, defaultValue);
    setLocalStorage('name', input.value);
  });
};

const addFocusClickHandler = () => {
  const form = document.forms.focus;
  const input = form.elements.focusTodo;
  const defaultValue = "[write your focus here]";
  input.addEventListener('blur', () => {
    resizeInput(input, defaultValue);
    setLocalStorage('focus', input.value);
  });
};

const resizeInput = (input, defaultValue) => {
  if (input.value.length > 0) {
    input.style.width = input.value.length + .7 + "ch";
  } else {
    input.style.width = defaultValue.length - 2.5 + "ch";
  }
};