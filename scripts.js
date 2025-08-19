const add = function (a, b) {
    aNum = Number(a)
    bNum = Number(b)
    return aNum + bNum;
};

const  subtract = function (a, b) {
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
let calculationFinished = false;
const CalculateOperation = function (num1, op, num2) {
    switch(op){
        case '+':
            return add(num1,num2);

        case '-':
            return subtract(num1,num2);

        case '*':
            return multiply(num1,num2);

        case '/':
            return divide(num1,num2);
 }};

// create a digit and operator variables
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

const display = document.querySelector('#display');
let currentOperand = display.textContent;

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (calculationFinished) {
            display.textContent = digit.textContent;
            calculationFinished = false
        }
        else if (display.textContent === '0') {
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
        if (calculationFinished){
            firstOperand = display.textContent;
            currentOperand = '';
            chosenOperator = operator.textContent;
            display.textContent += ` ${chosenOperator} `;
            calculationFinished = false;
        }
    else  if (chosenOperator === ''){
        firstOperand = currentOperand;
        currentOperand = '';
        chosenOperator = operator.textContent;
        display.textContent += ` ${chosenOperator} `}})
}
// No 'else block here If there is already a chosen operation it will not switch to another
);

const equalBtn =  document.querySelector('#equal');
equalBtn.addEventListener('click' ,()=> {
    // if there are two operands and an operation.
    secondOperand = display.textContent.split(' ')[2];
    // calc function here 
    answer = CalculateOperation(firstOperand, chosenOperator, secondOperand);
    // display the result 
    display.textContent = answer;
    currentOperand = answer;
    // reset the opereator
    chosenOperator = ''
    calculationFinished = true;
})

// Adding a clear button
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    firstOperand = '';
    display.textContent = '0';
    chosenOperator = '';
    calculationFinished = false;
    currentOperand = '';
})

// Adding a decimal point functionality
const decimalPoint = document.querySelector('#decimal');
decimalPoint.addEventListener('click', ()=> {
    if (display.textContent.split(' ').at(-1).includes('.') === false) // check if the last number, first or second has a dot in it.
    display.textContent += decimalPoint.textContent;
})