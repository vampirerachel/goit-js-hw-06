let counterValue = 0

const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const counterEl = document.querySelector('#value');

incrementBtn.addEventListener('click', e => {
    counterValue++
    counterEl.innerHTML = counterValue;
})

decrementBtn.addEventListener('click', e => {
    counterValue--;
    counterEl.innerHTML = counterValue;
})