for (let i = 0; i < 76; i++) {
  let bingoTable = document.querySelector("#bingo-container");
  const cell = document.createElement("div");
  cell.className = "numberCells";
  const bingoNumbers = document.createElement("h3");
  bingoNumbers.innerText = i + 1;
  cell.appendChild(bingoNumbers);
  bingoTable.appendChild(cell);
}

const bingoNumber = function () {
  let randomNumber = Math.floor(Math.random() * 76 + 1);
  console.log(randomNumber);

  let allNumbers = Array.from(document.querySelectorAll(".numberCells"));

  let selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }

  allNumbers[randomNumber - 1].classList.add("selected");

  // if (cardDiv) {
  //   let numbersOfCards = Array.from(
  //     document.querySelector(".cardCells").getElementsByTagName("h3").
  //   );
  //   for (let i = 0; i < numbersOfCards.length; i++) {
  //     if (numbersOfCards[i] == randomNumber)
  //       numbersOfCards[i].classList.add("selected1");
  //   }
  // }
};

function createNewCard() {
  let cardDiv = document.createElement("div");
  cardDiv.className = "cardDiv";
  for (let i = 0; i < 24; i++) {
    let random = Math.floor(Math.random() * 76 + 1);
    let cardCells = document.createElement("div");
    cardCells.classList.add("cardCells");
    let cardNumbers = document.createElement("h3");
    cardNumbers.innerText = random;
    cardCells.appendChild(cardNumbers);
    cardDiv.appendChild(cardCells);
  }
  document.querySelector("body").appendChild(cardDiv);
}
