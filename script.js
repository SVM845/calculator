const display = document.querySelector('#display');
const input = document.querySelectorAll('.buttons button')
let operand1 = '';
let operand2 = '';
let operator = '';
let currentValue2 = '';
let currentValue1 = '';
let result = '';


const themeButton = document.createElement("button");

themeButton.id = "themeButton";
themeButton.textContent = "☀️";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }
});


document.addEventListener("keydown", (e) => {
    target = e.key;
    switch (e.key) {
        case "1":
            currentValue2 += "1";
            break;
        case "2":
            currentValue2 += "2";
            break;
        case "3":
            currentValue2 += "3";
            break;
        case "4":
            currentValue2 += "4";
            break;
        case "5":
            currentValue2 += "5";
            break;
        case "6":
            currentValue2 += "6";
            break;
        case "7":
            currentValue2 += "7";
            break;
        case "8":
            currentValue2 += "8";
            break;
        case "9":
            currentValue2 += "9";
            break;
        case "0":
            currentValue2 += "0";
            break;
    }
    if (target === "Clear") { clearButton() }
    else if (target === "Backspace"){ clearButton()}
    else if (target === "=" || target == "Enter") { equationButton() }
    else if (display.textContent === "Infinity" || display.textContent === "NaN") {
        currentValue2 = "";
        display.textContent = "";
    }
    else if (target === "+" || target === "-" || target === "*" || target === "/") {
        opeButtons(currentValue2);
        operator = e.key;
        currentValue2 = "";
    }
    else {
        display.textContent = currentValue2;
    };
})


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
function opeButtons(currentValue2) {
    operand1 = currentValue2;
    display.textContent = "";
    return currentValue1 = operand1;
}