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
const decimalButton = document.querySelector('.decimal-button');

addButtonEventListener();

function addButtonEventListener() {
    addNumbersButtonEvent();
    
    multiplyButton.addEventListener('click', () => {
        checkEmptyOperands(multiply, 'x');
    });
    divideButton.addEventListener('click', () => {
        checkEmptyOperands(division, '/');
    });
    addButton.addEventListener('click', () => {
        checkEmptyOperands(add, '+');
    });
    minusButton.addEventListener('click', () => {
        checkEmptyOperands(subtract, '-');
    });
    
    equalsButton.addEventListener('click', equalsButtonEvent);

    clearButton.addEventListener('click', clear);

    decimalButton.addEventListener('click', decimalButtonEvent);
};

function decimalButtonEvent() {
    if (operand2 == undefined && operand1 != undefined) {
        operand1 += ".";
        calculatorDisplay.textContent = operand1;
        decimalButton.disabled = true;
    } else if (operand2 != undefined) {
        operand2 += ".";
        calculatorDisplay.textContent += ".";
        decimalButton.disabled = true;
    }
};

function checkEmptyOperands(newOperator, symbolDisplay) {
    if (operand1 != undefined && operand2 != undefined) {
        const result = +operate(operator, parseFloat(operand1), parseFloat(operand2)).toFixed(10);
        operand1 = result;
        calculatorDisplay.textContent = result + ' ' + symbolDisplay;
        operand2 = undefined;
        operator = newOperator;
    } else if (operand1 != undefined) {
        decimalButton.disabled = false;
        operator = newOperator;
        calculatorDisplay.textContent = operand1 + ' ' + symbolDisplay;
    }
};

function equalsButtonEvent() {
    if (operand1 != undefined && operand2 != undefined) {
        if (operand2 == 0 && operator == division) {
            clear();
            alert("No dividing by 0!");
        } else {
            calculation = +operate(operator, parseFloat(operand1), parseFloat(operand2)).toFixed(10);
            calculatorDisplay.textContent = calculation;
            operand1 = calculation;
            operator = undefined;
            operand2 = undefined;
        }
    }
};

function addNumbersButtonEvent() {
    buttonRow.forEach((element) => {
        const buttons = element.children;
        for (let i = 0; i < buttons.length; i++) {
            const textValue = parseInt(buttons[i].textContent);
            if (Number.isNaN(textValue)) {
                continue;
            }
            buttons[i].addEventListener('click', () => {
                display = textValue;
                if (typeof operator == 'undefined' && typeof operand1 == 'undefined') {
                    operand1 = textValue;
                    calculatorDisplay.textContent = textValue;
                } else if (typeof operator == 'undefined') {
                    operand1 += textValue;
                    calculatorDisplay.textContent = operand1;
                } else if (typeof operator != 'undefined' && typeof operand2 == 'undefined'){
                    operand2 = textValue;
                    calculatorDisplay.textContent += " " + textValue;
                } else {
                    operand2 += textValue;
                    calculatorDisplay.textContent += textValue;
                }
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

function clear() {
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
    calculatorDisplay.textContent = "";
    decimalButton.disabled = false;
}