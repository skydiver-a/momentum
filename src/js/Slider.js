export default class Slider {
  constructor() {
    this.place = document.querySelector('.place');
    this.slide = document.querySelector('.slider');
    this.accessKey = 'rlP1FtA0Qx-aahiLT_eeV_2Nkax_nVHq4TDH8d6OtF8';
  }

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
    const url = 'https://api.unsplash.com/search/photos?query='+this.getPart()+'&client_id='+this.accessKey;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.loadImgAndPlace(data);
      })
      .catch(error => console.log('Authorization failed : ' + error.message));
  }

  loadImgAndPlace(data) {;
    const random = Math.floor(Math.random() * data.results.length);
    
    this.slide.style.background = `url(${data.results[random].urls.regular}) no-repeat`;
    this.slide.style.backgroundSize = 'cover';
    console.log(data.results[random]);
    this.place.innerHTML = data.results[random].user.location;
  }

  removeImgAndPlace() {
    this.slide.innerHTML = '';
    this.place.innerHTML = "";
  }

  build() {
    this.render();
  }

  update() {
    this.removeImgAndPlace();
    this.render();
  }
}