const renderQuote = (data) => {
  const quoteEl = document.querySelector(".quote");
  const quoteAuthorEl = document.querySelector(".quote-author");
  quoteEl.innerText = data.content;
  quoteAuthorEl.innerText = `-- ${data.author}`;
};

const fetchRandomQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => {
      if (res.status !== 200) {
        throw Error;
      }
      return res.json();
    })
    .then((data) => {
      renderQuote(data);
    })
    .catch((error) => {
      document.body.innerHTML =
        "Quote could not be fetched currently due to some error.";
    });
};

fetchRandomQuote();
