const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  
  ingredientsListEl.append(ingredientEl);
})

console.log(ingredientsListEl);

