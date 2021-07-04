const cards = document.querySelectorAll(".card");
const reloadGame = document.querySelector(".reload");
const unhiddenCards = document.querySelectorAll(".unhide");
const imgLocation = "./assets/";
const gameCards = [
  "bayleaf",
  "charmender",
  "eeve",
  "pikachu",
  "snorlax",
  "squirtel",
  "gengar",
  "bulbasaur",
];
let prevCard = 0;
let matchedCards = [];
const shuffle = (array) => {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const loadGame = () => {
  const shuffeledCards = shuffle(gameCards.concat(gameCards));
  let i = 0;
  [...unhiddenCards].forEach((card) => {
    card.setAttribute("src", `${imgLocation}${shuffeledCards[i]}.png`);
    i++;
  });
  let totalCards = shuffeledCards.length;
  while (totalCards--) {
    matchedCards.push(false);
  }
};

const flipCardFace = (cardToShow, cardToHide) => {
  cardToShow.style.display = "block";
  cardToHide.style.display = "none";
};

const vanishCards = (firstCard, secCard) => {
  firstCard.style.display = "none";
  secCard.style.display = "none";
};

const flipCard = (e) => {
  let selectedCard = parseInt(e.currentTarget.id);
  if (matchedCards[selectedCard - 1]) {
    return;
  }
  let unhiddenCard = document
    .getElementById(selectedCard)
    .querySelector(".unhide");
  let hiddenCard = document.getElementById(selectedCard).querySelector(".hide");
  if (prevCard === 0) {
    prevCard = selectedCard;
    flipCardFace(unhiddenCard, hiddenCard);
  } else if (prevCard !== selectedCard) {
    let prevUnhiddenCard = document
      .getElementById(prevCard)
      .querySelector(".unhide");
    let prevHiddenCard = document
      .getElementById(prevCard)
      .querySelector(".hide");
    flipCardFace(unhiddenCard, hiddenCard);

    if (
      prevUnhiddenCard.getAttribute("src") === unhiddenCard.getAttribute("src")
    ) {
      matchedCards[prevCard - 1] = true;
      matchedCards[selectedCard - 1] = true;
      prevCard = 0;
      setTimeout(() => {
        vanishCards(prevUnhiddenCard, unhiddenCard);
      }, 500);
    } else {
      prevCard = 0;
      setTimeout(() => {
        flipCardFace(prevHiddenCard, prevUnhiddenCard);
      }, 500);
      setTimeout(() => {
        flipCardFace(hiddenCard, unhiddenCard);
      }, 1000);
    }
  }
};

window.addEventListener("load", loadGame);
reloadGame.addEventListener("click", () => {
  location.reload();
});
[...cards].forEach((card) => {
  card.addEventListener("click", flipCard);
});
