const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = Number(valueEl.textContent);

decrementButtonEl.addEventListener('click', () => {
    counterValue -= Number(incrementButtonEl.textContent);
    valueEl.textContent = String(counterValue);
});

incrementButtonEl.addEventListener('click', () => {
    counterValue += Number(incrementButtonEl.textContent);
    valueEl.textContent = String(counterValue);
});

