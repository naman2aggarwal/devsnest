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
let prevCardId = 0;
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

const checkWinner = () => {
  if (!matchedCards.includes(false)) {
    const winningHeader = document.querySelector(".win-message");
    winningHeader.innerText = "Congratulations, You Won!";
    reloadGame.focus();
  }
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
  let selectedCardId = parseInt(e.currentTarget.id);
  let selectedCard = e.currentTarget;
  if (matchedCards[selectedCardId - 1]) {
    return;
  }
  selectedCard.classList.add("flip");
  let unhiddenCard = document
    .getElementById(selectedCardId)
    .querySelector(".unhide");
  let hiddenCard = document
    .getElementById(selectedCardId)
    .querySelector(".hide");
  if (prevCardId === 0) {
    prevCardId = selectedCardId;
    flipCardFace(unhiddenCard, hiddenCard);
  } else if (prevCardId !== selectedCardId) {
    let prevCard = document.getElementById(prevCardId);
    let prevUnhiddenCard = document
      .getElementById(prevCardId)
      .querySelector(".unhide");
    let prevHiddenCard = document
      .getElementById(prevCardId)
      .querySelector(".hide");
    flipCardFace(unhiddenCard, hiddenCard);

    if (
      prevUnhiddenCard.getAttribute("src") === unhiddenCard.getAttribute("src")
    ) {
      matchedCards[prevCardId - 1] = true;
      matchedCards[selectedCardId - 1] = true;
      prevCardId = 0;
      setTimeout(() => {
        vanishCards(prevUnhiddenCard, unhiddenCard);
      }, 500);
      checkWinner();
    } else {
      prevCardId = 0;
      setTimeout(() => {
        prevCard.classList.remove("flip");
        flipCardFace(prevHiddenCard, prevUnhiddenCard);
      }, 500);
      setTimeout(() => {
        selectedCard.classList.remove("flip");
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
