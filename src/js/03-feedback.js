const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// При загрузке страницы проверяем наличие сохраненных данных в хранилище и заполняем поля формы
window.addEventListener('load', () => {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
  }
});

// Сохраняем текущее состояние формы в хранилище не чаще чем раз в 500 миллисекунд
let timeoutId = null;
form.addEventListener('input', () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    const state = { email: emailInput.value, message: messageInput.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
    timeoutId = null;
  }, 500);
});

// Обработчик сабмита формы
form.addEventListener('submit', event => {
  event.preventDefault();
  const state = { email: emailInput.value, message: messageInput.value };
  console.log(state);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
