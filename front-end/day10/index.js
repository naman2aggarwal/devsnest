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
};

const flipCard = (e) => {
  console.log(e.target);
};
window.addEventListener("load", loadGame);
reloadGame.addEventListener("onclick", loadGame);
[...cards].forEach((card) => {
  card.addEventListener("click", flipCard);
});
