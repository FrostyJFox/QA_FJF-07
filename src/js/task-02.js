const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Get the ul#ingredients element
const ingredientsList = document.getElementById('ingredients');

// Use map() to create an array of <li> elements
const ingredientsArr = ingredients.map((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});

// Create a document fragment to hold the new elements
const fragment = document.createDocumentFragment();

// Append all the <li> elements to the fragment
fragment.append(...ingredientsArr);

// Append the fragment to the ul#ingredients list in one operation
ingredientsList.appendChild(fragment);
