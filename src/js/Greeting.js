export default class Greeting {
  constructor() {}

  getPart() {    
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
    return part;
  }

  render() {
    const part = this.getPart();
    const greeting = document.querySelector(".greeting-content");
    greeting.innerText = `Good ${part}, `;
  }

  build() {
    this.render();
    setInterval(() => this.render(), 1000);
  }
}