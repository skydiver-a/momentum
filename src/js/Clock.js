export default class Clock {
  constructor() {}

  render() {
    const clock = document.querySelector(".clock");
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }

  build() {
    this.render();
    setInterval(() => this.render(), 1000);
  }
}