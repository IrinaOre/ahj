function createFieldBody() {
  let fieldBodyEl = document.createElement("div");
  fieldBodyEl.classList = "field__body";
  document.querySelector("body").append(fieldBodyEl);

  for (let i = 0; i < 16; i++) {
    let fieldCellEl = document.createElement("div");
    fieldCellEl.classList = "field__cell";
    document.querySelector(".field__body").append(fieldCellEl);
  }
}

createFieldBody();

const cellList = document.querySelectorAll(".field__cell");

function randomGoblin() {
  for (let i = 0; i < cellList.length; i++) {
    cellList[i].classList = "field__cell";
  }

  let random = Math.floor(Math.random() * 16) + 0;

  cellList[random].classList.add("field__goblin");
}

setInterval(randomGoblin, 1000);
