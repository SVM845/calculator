const display = document.querySelector('#display');
const buttonsContainer = document.querySelector('.buttons');
// const operandInput2 = 
let operand1 = '';
let operand2 = '';
let operator = '';

buttonsContainer.addEventListener('click' , (e) =>{
    // if(e.target.textContent === "9" ){console.log(9)};
    // if(e.target.textContent === "8" ){console.log(8)};
    // if(e.target.textContent === "7" ){console.log(7)};
    // if(e.target.textContent === "6" ){console.log(6)};
    // if(e.target.textContent === "5" ){console.log(5)};
    // if(e.target.textContent === "4" ){console.log(4)};
    // if(e.target.textContent === "3" ){console.log(3)};
    // if(e.target.textContent === "2" ){console.log(2)};
    // if(e.target.textContent === "1" ){console.log(1)};
    // if(e.target.textContent === "0" ){console.log(0)};
    number = Number(e.target.textContent);
    operand1 += number;
    console.log(operand1);
    display.textContent = operand1;

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
    return num1/num2;
}

function operate(operator, number1, number2){
    return operator(number1, number2);
}

