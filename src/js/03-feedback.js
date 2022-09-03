const throttle = require('lodash.throttle');
const elem = document.querySelector('.feedback-form');
const storage = localStorage.getItem('feedback-form-state');

if (storage) {
  document.querySelector("[type='email']").value = JSON.parse(storage).email;
  document.querySelector("[name='message']").value =
    JSON.parse(storage).message;
}

const handleInput = event => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: elem.email.value, message: elem.message.value })
  );
};
elem.addEventListener('input', throttle(handleInput, 500));

const handleSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  elem.reset();
};
elem.addEventListener('submit', handleSubmit);