




/*const inputMaxEl = document.querySelector(inputEl.dataset.length);textInput.value = ""
const checkInputLengthEl = inputEl.addEventListener("blur", (e) => {
inputEl.blur() = inputEl.length;
});

inputEl.addEventListener("blur", () => {
inputEl.blur() ;
});*/

let inputEl = document.querySelector("#validation-input");
const maxValEl = inputEl.dataset.length

inputEl.addEventListener("input", (e) => {
    if (e.target.value.length =< maxValEl) {
        inputEl.classList.add('valid')
    }
    else if (e.target.value.length > maxValEl) {
        inputEl.classList.add('invalid') 
    }
})

