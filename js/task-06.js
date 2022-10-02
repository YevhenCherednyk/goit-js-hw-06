/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів.

Яка кількість смиволів повинна бути в інпуті, 
зазначається в його атрибуті data-length.

Якщо введена правильна кількість символів, то border інпуту 
стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, 
які ми вже додали у вихідні файли завдання.
*/

const refs = {
  inputRef: document.querySelector('#validation-input'),
};

const onBlurInput = event => {
  refs.inputRef.classList.add('invalid');

  refs.inputRef.value.length === Number(refs.inputRef.dataset.length)
    ? refs.inputRef.classList.replace('invalid', 'valid')
    : refs.inputRef.classList.replace('valid', 'invalid');
};

refs.inputRef.addEventListener('blur', onBlurInput);
