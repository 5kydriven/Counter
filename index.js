const value = document.getElementById('value');
const inc = document.querySelector('.increase');
const dec = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
var counter = 0;

function updateCounter() {
    value.textContent = counter;
    if (counter > 0) {
        value.style.color = 'green';
    } else if (counter < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = 'rgb(34, 34, 34)';
    }
}

inc.addEventListener('click', () => {
    counter++;
    updateCounter();
})

dec.addEventListener('click', () => {
    counter--;
    updateCounter();
})

reset.addEventListener('click', () => {
    counter = 0;
    updateCounter();
})