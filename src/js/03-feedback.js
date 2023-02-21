import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  mail: document.querySelector('.feedback-form  input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.mail.addEventListener('input', throttle(onTextareaInput, 500));
getTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  const objinfo = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(objinfo));
  localStorage.removeItem('feedback-form-state');
}
function onTextareaInput(evt) {
  let obj = {
    email: refs.mail.value,
    message: refs.textarea.value,
  };
  if (refs.mail === evt.currentTarget) {
    obj.email = evt.currentTarget.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  }
  if (refs.textarea === evt.currentTarget) {
    obj.message = evt.currentTarget.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  }
}
function getTextarea() {
  const theme = localStorage.getItem('feedback-form-state');
  if (theme) {
    const newobj = JSON.parse(theme);
    refs.textarea.value = newobj.message;
    refs.mail.value = newobj.email;
  }
}
