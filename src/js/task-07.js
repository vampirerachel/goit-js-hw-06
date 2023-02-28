let sliderEl = document.querySelector('#font-size-control')
let spanEl = document.querySelector('#text')

sliderEl.addEventListener('input', (e) =>{
    const rangeValueEl = sliderEl.value;
    spanEl.style.fontSize = rangeValueEl + 'px';
})