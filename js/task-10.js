/*
Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає 
кнопку Створити, після чого рендериться колекція. 
Натисненням на кнопку Очистити, колекція елементів очищається.


Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і 
додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від 
попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.
*/

const refs = {
  inputNumberRef: document.querySelector('#controls input'),
  createElementsBtnRef: document.querySelector('[data-create]'),
  destroyElementsBtnRef: document.querySelector('[data-destroy]'),
  divBoxesRef: document.querySelector('#boxes'),
};

refs.createElementsBtnRef.addEventListener('click', onCreateBtn);
refs.destroyElementsBtnRef.addEventListener('click', onDestroyBtn);

function onCreateBtn(event) {
  createBoxes(refs.inputNumberRef.value);
}

function onDestroyBtn(event) {
  refs.inputNumberRef.value = '';
  refs.divBoxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const DIV_SIZE_INCREMENT = 10;
  let divWidth = 30;
  let divHeight = 30;
  const divItemArr = [];

  const itemAddRef = document.createElement('div');
  refs.divBoxesRef.append(itemAddRef);

  for (let i = 0; i < amount; i += 1) {
    divWidth += DIV_SIZE_INCREMENT;
    divHeight += DIV_SIZE_INCREMENT;
    divItemArr.push(creatNewDiv(divWidth, divHeight));
  }
  refs.divBoxesRef.append(...divItemArr);
}

function creatNewDiv(divWidth, divHeight) {
  const element = document.createElement('div');

  element.style.width = `${divWidth}px`;
  element.style.height = `${divHeight}px`;
  element.style.backgroundColor = getRandomHexColor();

  return element;
}
