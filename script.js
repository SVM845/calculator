const display = document.querySelector('#display');
const input = document.querySelectorAll('.buttons button')
let operand1 = '';
let operand2 = '';
let operator = '';
let currentValue2 = '';
let currentValue1 = '';
let result = '';

input.forEach(button => {
    button.addEventListener("click", (e) => {
        target = e.target.textContent;
        if (target === "Clear") { clearButton() }
        else if (target === "=") { equationButton() }
        else if (display.textContent === "Infinity" || display.textContent === "NaN") {
            currentValue2 = "";
            display.textContent = "";
        }
        else if (target === "+" || target === "-" || target === "*" || target === "/") {
            opeButtons(currentValue2);
            operator = e.target.textContent;
            currentValue2 = "";
        }
        else {
            currentValue2 += e.target.textContent;
            display.textContent = currentValue2;
        };
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
    console.log(operand1);
    console.log(operand2);
    console.log(operator);
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
    };


}


function clearButton() {
    currentValue2 = "";
    display.textContent = "";
}
function equationButton() {
    // this code is for parsing the whole string, its harder and more complex
    // I accidentally did this first time and it works :P

    // for (let i = 0; i < currentValue2.length; i++) {
    //     if (currentValue2[i] == "-" || currentValue2[i] == "+" || currentValue2[i] == "*" || currentValue2[i] == "/") {
    //         operator = currentValue2[i];
    //         let newValue1 = [];
    //         let newValue2 = [];

    //         for (let j = 0; j < i; j++) {
    //             newValue1 += currentValue2[j];
    //         }
    //         operand1 = Number(newValue1);

    //         let j = i + 1;
    //         for (j; j < currentValue2.length; j++) {
    //             newValue2 += currentValue2[j];
    //         }
    //         operand2 = Number(newValue2);


    //         result = operate(operator, operand1, operand2);
    //         display.textContent = result;
    //         return currentValue2 = result;

    //     }
    // }
    operand1 = Number(currentValue1);
    operand2 = Number(currentValue2);
    result = operate(operator, operand1, operand2);
    display.textContent = result;
    currentValue1 = "";
    currentValue2 = ""; 
    
}
function opeButtons(currentValue2){
    operand1 = currentValue2;
    display.textContent = "";
    return currentValue1 = operand1;
}