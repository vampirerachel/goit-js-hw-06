let sliderEl = document.querySelector('#font-size-control')
let spanEl = document.querySelector('#text')

spanEl.style.fontSize = (parseInt(sliderEl.value));

sliderEl.addEventListener('input', (e) => {
    
    const rangeValueEl = (parseInt(sliderEl.value));
    console.log(rangeValueEl)
    spanEl.style.fontSize = rangeValueEl + 'px';
})