/*
Напиши скрипт, який реагує на зміну значення 
input#font-size-control (подія input) і змінює 
інлайн-стиль span#text, оновлюючи властивість font-size. 

В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  textRef: document.querySelector('#text'),
};

refs.inputRef.addEventListener('input', onFontaSizeTextChange);

function onFontaSizeTextChange(event) {
  refs.textRef.style.fontSize = `${refs.inputRef.value}px`;
}
