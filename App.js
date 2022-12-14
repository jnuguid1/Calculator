let display;
let operator;
let operand1;
let operand2;
let calculation;
const buttonRow = document.querySelectorAll('.button-row');
const calculatorDisplay = document.querySelector('.calculator-display');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const addButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const equalsButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');

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
                if (typeof operand1 == 'undefined') {
                    operand1 = textValue;
                    calculatorDisplay.textContent = textValue;
                } else {
                    operand2 = textValue;
                    calculatorDisplay.textContent += " " + textValue;
                }
            });
        }
    });
    multiplyButton.addEventListener('click', () => {
        operator = multiply;
        calculatorDisplay.textContent = operand1 + ' x'; 
    });
    divideButton.addEventListener('click', () => {
        operator = division;
        calculatorDisplay.textContent = operand1 + ' /';
    });
    addButton.addEventListener('click', () => {
        operator = add;
        calculatorDisplay.textContent = operand1 + ' +';
    });
    minusButton.addEventListener('click', () => {
        operator = subtract;
        calculatorDisplay.textContent = operand1 + ' -';
    });
    
    equalsButton.addEventListener('click', () => {
        calculation = operate(operator, operand1, operand2);
        calculatorDisplay.textContent = calculation;
        operand1 = calculation;
        operator = undefined;
        operand2 = undefined;
    });

    clearButton.addEventListener('click', () => {
        operand1 = undefined;
        operand2 = undefined;
        operator = undefined;
        calculatorDisplay.textContent = "";
    });
};

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