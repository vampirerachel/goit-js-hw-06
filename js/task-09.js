const buttonEl = document.querySelector('.change-color')
const colorEl = document.querySelector('.color')
const bodyEl = document.querySelector('body')
/*bodyEl.style.backgroundColor = 'getRandomHexColor'*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
buttonEl.addEventListener('click', (e) => {
  let randomColor = getRandomHexColor()
  bodyEl.style.backgroundColor = randomColor
  colorEl.innerHTML = randomColor
})

