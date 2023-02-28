export default class Greeting {
  constructor() {}

  render() {
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
}

  build() {
    this.render();
    setInterval(() => this.render(), 1000);
  }
}