const add = function (a, b) {
    aNum = Number(a)
    bNum = Number(b)
    return aNum + bNum;
};

const subtract = function (a, b) {
    return a - b;
};


const divide = function (a, b) {
    bNum = Number(b)
    return bNum === 0 ? 'Error' : a / bNum;
};
const multiply = function (a, b) {
    return a * b;
};

// A calculator operation will consist of a number, an operator, and another number

// create three variables one for each argument.
let calculationFinished = false;
const CalculateOperation = function (num1, op, num2) {
    switch (op) {
        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);
    }
};

// create a digit and operator variables
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

const display = document.querySelector('#display');
let currentOperand = display.textContent;

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        const digitText = digit.textContent;

        // Condition to REPLACE the display
        if (calculationFinished || display.textContent === '0') {
            display.textContent = digitText;
            calculationFinished = false; // Always reset the flag here
        }
        // Condition to ADD to the display
        else {
            display.textContent += digitText;
        }

        // ALWAYS update currentOperand after any change
        currentOperand = Number(display.textContent.split(' ').at(-1));
    });
});

let chosenOperator = '';
let firstOperand = '';

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (calculationFinished) {
            firstOperand = display.textContent;
            currentOperand = '';
            chosenOperator = operator.textContent;
            display.textContent += ` ${chosenOperator} `;
            calculationFinished = false;
        }
        else if (chosenOperator === '') {
            firstOperand = currentOperand;
            currentOperand = '';
            chosenOperator = operator.textContent;
            display.textContent += ` ${chosenOperator} `
        }
    })
}
    // No 'else block here If there is already a chosen operation it will not switch to another
);

const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
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
});

// Adding a clear button
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    firstOperand = '';
    display.textContent = '0';
    chosenOperator = '';
    calculationFinished = false;
    currentOperand = '';
});

// Adding a decimal point functionality
const decimalPoint = document.querySelector('#decimal');
decimalPoint.addEventListener('click', () => {
    if (display.textContent.split(' ').at(-1).includes('.') === false) // check if the last number, first or second has a dot in it.
        display.textContent += decimalPoint.textContent;
});

// Backspace to delete last digit or operand
document.addEventListener('keydown', (event) => {
    console.log("Backspace was pressed!");
    if (event.key === 'Backspace') {
        const lastChar = display.textContent.slice(-1);
        const operations = ['+', '-', '*', '/'];
        if (operations.includes(lastChar) ){
            chosenOperator = '';
            // display.textContent = display.textContent.slice(0, -2);
        }
       else if (lastChar === ' '){
            // The operation is always beteen a white space before and after
            // this will remove all the white space and the operation
            display.textContent = display.textContent.slice(0, -3);
            chosenOperator = '';
        }
        else {
        display.textContent = display.textContent.slice(0, -1)};
        // update the currentoperand to the new value only if its a number
        if(operations.includes(display.textContent.slice(-1)) === false){
             // sdisplay.textContent = display.textContent.slice(0, -1);
             currentOperand = Number(display.textContent.split(' ').at(-1))
    }
}});

// Keyboard support
document.addEventListener('keydown', (keypress)=> {
    // const digitKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // const operatorKeys = ['+', '-', '*', '/'];
    digits.forEach((digit)=> {
        if ( digit.textContent === keypress.key  ){
            digit.click();
        }
    })
    operators.forEach((operator) => 
         {
            if(operator.textContent === keypress.key)
                operator.click();
             })
     if ( keypress.key === '=' || keypress.key === 'Enter' ){
        equalBtn.click();
     }
    else  if ( keypress.key === '.'  ){
        decimalPoint.click();
     }
    else  if ( keypress.key === 'c' ||  keypress.key === 'C' ){
        clearBtn.click();
     }
});
    
