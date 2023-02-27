const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

ingredients.map(item => {
  const li = document.createElement('li');
  li.innerHTML = item;
  li.classList.add('item')
  ingredientsEl.append(li);
})
