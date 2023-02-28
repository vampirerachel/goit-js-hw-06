

let inputEl = document.querySelector("#validation-input");
const validLengthEl = inputEl.dataset.length
let validLengthNumEl = parseInt(validLengthEl)
let stringValueEl = inputEl.value.length


inputEl.addEventListener('input', handleInput)

function handleInput(){
    if (inputEl.value.length === validLengthNumEl){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid')
    }
        if (inputEl.value.length !== validLengthNumEl){
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid')
    }
}

inputEl.addEventListener('blur', (e) =>{
    let newMessageEl = inputEl.placeholder = "You entered " + e.target.value.length + " symbols"  
    e.target.value = newMessageEl
})

