const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};


const divide = function(a,b) {
	return a / b;
};

const multiply = function(a,b) {
	return a * b;
};

// A calculator operation will consist of a number, an operator, and another number

// create three variables one for each argument.
let num1 = 5;
let num2 = 3;
let op = '+';
const CalculatorOperation = function(num1, op, num2) {