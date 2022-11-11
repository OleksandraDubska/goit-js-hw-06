const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

inputEl.addEventListener('input', (event) => {
  return event.currentTarget.value;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = Number(inputEl.value);

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = '5px';
    boxesEl.append(box);
  }
}

buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', () => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
});

