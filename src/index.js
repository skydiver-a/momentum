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
  const searchBar = document.querySelector(".search_form"),
        searchInput = searchBar.querySelector(".search_form__input"),
        searchButton = document.querySelector(".search_form__btn");

  const openSearchBar = () => {
    searchBar.classList.add("show");
  }

  const closeSearchBar = () => {
    searchBar.classList.remove("show");
  }

  let searchBarIsClosed = true;

  searchButton.addEventListener("click", () => {
    if (searchBarIsClosed) {
      openSearchBar();
    } else {
      closeSearchBar();
    }
    searchBarIsClosed =!searchBarIsClosed;
  });

  searchInput.addEventListener("keydown", (event) => {
    if ((27 === event.which) || (13 === event.which)) {
        event.preventDefault();
        let searchString = "http://google.com/search?q=" + searchInput.value;
        window.open(searchString);
        //this should delete value from the input
        event.currentTarget.value = "";
        closeSearchBar();
    }
  });

  window.addEventListener("click", (event) => { 
    !searchBar.contains(event.target) && closeSearchBar();
  });
}