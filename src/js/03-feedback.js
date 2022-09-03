const throttle = require('lodash.throttle');
const elem = document.querySelector('.feedback-form');
const STORAGE_KEY_STATE = 'feedback-form-state';
const storage = localStorage.getItem(STORAGE_KEY_STATE);

if (storage) {
  document.querySelector("[type='email']").value = JSON.parse(storage).email;
  document.querySelector("[name='message']").value =
    JSON.parse(storage).message;
}

const handleInput = event => {
  localStorage.setItem(
    STORAGE_KEY_STATE,
    JSON.stringify({ email: elem.email.value, message: elem.message.value })
  );
};
elem.addEventListener('input', throttle(handleInput, 500));

const handleSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY_STATE)));
  localStorage.clear();
  elem.reset();
};
elem.addEventListener('submit', handleSubmit);
