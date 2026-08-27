let operand1 = '';
let operand2 = '';
let operator = '';


function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1/num2;
}

function operate(operator, number1, number2){
    return operator(number1, number2);
}

