let display = document.getElementById('screen');

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}
