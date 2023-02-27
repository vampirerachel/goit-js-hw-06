const lengthEl = document.querySelectorAll('#categories');
const categoriesEl = document.querySelectorAll('h2')
const listEl = document.querySelectorAll('.item')
console.log("Number of categories:" + listEl.length)

    const listConsoleEl = listEl.forEach(element=>{
    const categoryEls = element.querySelectorAll('li');
        const text = element.querySelector('h2').textContent;
        
    console.log('Category:' + text + ' Elements :' + categoryEls.length)  
    })









