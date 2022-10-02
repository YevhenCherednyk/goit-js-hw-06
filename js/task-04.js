/*
Лічильник складається зі спану і кнопок, які по кліку 
повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне 
значення лічильника та ініціалізуй її значенням 0.

Додай слухачів кліків до кнопок, всередині яких збільшуй 
або зменшуй значення лічильника.

Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const refs = {
  counterValueRef: document.querySelector('#value'),
  buttonDescrementRef: document.querySelector(
    'button[ data-action="decrement"]'
  ),
  buttonInscrementRef: document.querySelector(
    'button[ data-action="increment"]'
  ),
};

let counterValue = 0;

const onCounterDescrement = event => {
  counterValue -= 1;
  refs.counterValueRef.textContent = counterValue;
};

const onCounterInscrement = event => {
  counterValue += 1;
  refs.counterValueRef.textContent = counterValue;
};

refs.buttonDescrementRef.addEventListener('click', onCounterDescrement);
refs.buttonInscrementRef.addEventListener('click', onCounterInscrement);
