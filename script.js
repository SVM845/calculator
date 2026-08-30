const display = document.querySelector('#display');
const input = document.querySelectorAll('.buttons button')
let operand1 = '';
let operand2 = '';
let operator = '';
let currentValue = '';

input.forEach(button => {
    button.addEventListener("click", (e) => {
        target = e.target.textContent;
        if (target === "Clear") { clearButton() }
        else if (target === "=") { equationButton(currentValue) }
        else {
            currentValue += e.target.textContent;
        };

        display.textContent = currentValue;




    })
})
function add(num1, num2) {
    return console.log(num1 + num2);
}
function subtract(num1, num2) {
    return console.log(num1 - num2);
}
function multiply(num1, num2) {
    return console.log(num1 * num2);
}
function divide(num1, num2) {
    return console.log(num1 / num2);
}

function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
            break;
        case "-":
            return subtract(number1, number2);
            break;
        case "*":
            return multiply(number1, number2);
            break;
        case "/":
            return divide(number1, number2);
            break;
    } 
    
}


function clearButton() {
    return currentValue = '';
}
function equationButton(currentValue) {
    console.log(currentValue.split(""));
    for (let i = 0; i < currentValue.length; i++) {
        if (currentValue[i] == "-" || currentValue[i] == "+" || currentValue[i] == "*" || currentValue[i] == "/") {
            operator = currentValue[i];
            let newValue1 = [];
            let newValue2 = [];

            for (let j = 0; j < i; j++) {
                newValue1 += currentValue[j];
            }
            operand1 = Number(newValue1);

            let j = i + 1;
            for (j; j < currentValue.length; j++) {
                newValue2 += currentValue[j];
            }
            operand2 = Number(newValue2);


            return operate(operator, operand1, operand2);

        }
    }
}