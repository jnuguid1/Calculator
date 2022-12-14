let display;
let operator;
let operand1;
let operand2;
const buttonRow = document.querySelectorAll('.button-row');
const calculatorDisplay = document.querySelector('.calculator-display');

addButtonEventListener();

function addButtonEventListener() {
    buttonRow.forEach((element) => {
        const buttons = element.children;
        for (let i = 0; i < buttons.length; i++) {
            const textValue = parseInt(buttons[i].textContent);
            if (Number.isNaN(textValue)) {
                continue;
            }
            buttons[i].addEventListener('click', () => {
                display = textValue;
                console.log(display);
                calculatorDisplay.textContent = textValue;
            });
        }
    });
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    return operator(a, b);
}