/*
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй 
метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ref = {
  list: document.querySelector('#ingredients'),
};

// const elements = ingredients.map(ingredient => {
//   const itemAddRef = document.createElement('li');
//   itemAddRef.textContent = ingredient;
//   itemAddRef.classList.add('item');

//   return itemAddRef;
// });

// ref.list.append(...elements);

// ========= function =============

const createNewElement = ingredients => {
  return ingredients.map(ingredient => {
    const itemAddRef = document.createElement('li');
    itemAddRef.textContent = ingredient;
    itemAddRef.classList.add('item');

    return itemAddRef;
  });
};

const elements = createNewElement(ingredients);
ref.list.append(...elements);
