let sliderEl = document.querySelector('#font-size-control')
let spanEl = document.querySelector('#text')

sliderEl.addEventListener('input', (e) => {
    let textSizeEl = sliderEl.value;
    console.log(textSizeEl)
    spanEl.style.fontSize = textSizeEl
})