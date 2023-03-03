import Calendar from "./js/Calendar.js";
import Clock from "./js/Clock.js";
import Greeting from "./js/Greeting.js";
import Quote from "./js/Quote.js";

window.onload = function() {
  const calendar = new Calendar();
  calendar.build();

  const clock = new Clock();
  clock.build();

  const greeting = new Greeting();
  greeting.build();

  const quote = new Quote();
  quote.build();

  addEnterNameClickHandler();

  addFocusClickHandler();

  addSearchClickHandler();
}

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

const addSearchClickHandler = () => {
  const searchForm = document.querySelector(".search-container")

  searchForm.submit(function(e) {
    e.preventDefault();
    searchFrom.reset(); // clear the message box)
  })/*
  const submitBtn = document.querySelector("#search-submit");

  submitBtn.addEventListener('click', () => {
    console.log("submit");
  })*/
  document.addEventListener("touchstart", function(){}, true);
};