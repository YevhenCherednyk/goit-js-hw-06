/*
Напиши скрипт, який змінює кольори фону елемента < body > 
через інлайн - стиль по кліку на button.change - color 
і виводить значення кольору в span.color.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnBgColorChangeRef: document.querySelector('.change-color'),
  colorValueRef: document.querySelector('.color'),
  bodyRef: document.querySelector('body'),
};
refs.btnBgColorChangeRef.addEventListener('click', onBodyBgColorChange);

function onBodyBgColorChange(event) {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
  refs.colorValueRef.textContent = getRandomHexColor();
}
