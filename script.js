const display = document.querySelector('#display');
const input1 = document.querySelectorAll('.buttons button')
let operand1 = '';
let operand2 = '';
let operator = '';

input1.forEach(button => {
    button.addEventListener("click", (e) => {
        target = e.target.textContent;
        if (target === "Clear"){clearButton()}
        else {
            operand1 += e.target.textContent;
        }
        operand1 = Number(operand1);
        display.textContent = operand1;
        
    })
})
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
    return num1 / num2;
}

function operate(operator, number1, number2) {
    return operator(number1, number2);
}


function clearButton(){
    return operand1 = '';
}