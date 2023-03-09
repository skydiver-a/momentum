export default class Quote {
  constructor() {
  }

  render(url) {
    const quoteCard = document.querySelector(".quote"),
          quoteContent = quoteCard.querySelector(".quote__content"),
          quoteAuthor = quoteCard.querySelector(".quote__author");

    fetch(url)
      .then(response => response.json())
      .then(data => {
        quoteContent.textContent = data.content;
        quoteAuthor.textContent = data.author;
      })
      .catch(error => console.log('Authorization failed : ' + error.message));
  }

  build() {
    this.render("https://api.quotable.io/random");
  }
}

