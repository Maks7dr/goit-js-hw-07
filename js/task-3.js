const textInput = document.querySelector('#name-input');
const textName = document.querySelector('#name-output');
textInput.addEventListener('input', event => {
  const text = event.target.value.trim();
  textName.textContent = text ? text : 'Anonymous';
});
