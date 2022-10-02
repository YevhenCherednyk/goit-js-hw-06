/*
Напиши скрипт, який під час набору тексту в інпуті 
input#name - input(подія input), підставляє його поточне 
значення в span#name - output.Якщо інпут порожній, у спані 
повинен відображатися рядок "Anonymous".
*/

const refs = {
  inputRef: document.querySelector('#name-input'),
  nameLabelRef: document.querySelector('#name-output'),
};

const onInputChange = event => {
  event.currentTarget.value
    ? (refs.nameLabelRef.textContent = event.currentTarget.value)
    : (refs.nameLabelRef.textContent = 'Anonymous');
};

refs.inputRef.addEventListener('input', onInputChange);

