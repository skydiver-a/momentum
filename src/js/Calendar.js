export default class Calendar {
  constructor() {}

  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const calendar = document.querySelector(".calendar span");
    const today = new Date();
    const year = String(today.getFullYear());
    const month = today.getMonth();
    const date = String(today.getDate());
    const day = today.getDay();
    calendar.innerText = `${week[day]}, ${months[month]} ${date}, ${year}`;
  }

  build() {
    this.render();
    setInterval(() => this.render(), 1000);
  }
}