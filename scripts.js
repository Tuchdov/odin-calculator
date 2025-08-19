const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};


const divide = function (a, b) {
    return a / b;
};

const multiply = function (a, b) {
    return a * b;
};

// A calculator operation will consist of a number, an operator, and another number

// create three variables one for each argument.

const CalculateOperation = function (num1, op, num2) { }

// create a digit and operator variables
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

const display = document.querySelector('#display');
let currentOperand = display.textContent;

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = digit.textContent;
            currentOperand = Number(display.textContent);
        }
        else {
            display.textContent += digit.textContent;
            currentOperand = Number(display.textContent);
        }
    })
});


let chosenOperator = '';
let firstOperand = '';

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (chosenOperator === ''){
        firstOperand = currentOperand;
        currentOperand = '';
        chosenOperator = operator.textContent;
        display.textContent += ` ${chosenOperator} `}})
}
// No 'else block here If there is already a chosen operation it will not switch to another
);