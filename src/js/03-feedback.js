const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY_EMAIL = 'feedback-form-email';
const STORAGE_KEY_STATE = 'feedback-form-state';
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
refs.input.addEventListener('input', onTextareaInputEmail);

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Send message');
  populateMessageInput();
  populateMessageOutput();
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY_STATE);
  localStorage.removeItem(STORAGE_KEY_EMAIL);
}
function onTextareaInput(e) {
  const message = e.currentTarget.value;
  localStorage.setItem(STORAGE_KEY_STATE, message);
}
function onTextareaInputEmail(e) {
  const email = e.currentTarget.value;
  localStorage.setItem(STORAGE_KEY_EMAIL, email);
}
function populateMessageOutput() {
  const saveMesagge = localStorage.getItem(STORAGE_KEY_STATE);
  if (saveMesagge) {
    console.log('message:', saveMesagge);
    refs.textarea.value = saveMesagge;
  }
}
function populateMessageInput() {
  const saveEmail = localStorage.getItem(STORAGE_KEY_EMAIL);
  if (saveEmail) {
    console.log('email:', saveEmail);
    refs.input.value = saveEmail;
  }
}
