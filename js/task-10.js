const boxesEl = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const newDiv = document.createElement("div")
  let newDivs = newDiv.length * amount
boxesEl.append(newDivs)
}
console.log(createBoxes(2))