function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b; 
}

function multiply(a, b) {
    return Math.round((a * b) * 10) / 10;
}

function divide(a, b) {
    if (b == 0) return;
    return Math.round((a / b) * 10) / 10;
}


let leftOperand;
let operator;
let operatorPressed;
let rightOperand;

function operate(left, right, ope) {
    if (ope == '+') {
        return add(left, right)
    } else if (ope == '-') {
        return substract(left, right)
    } else if (ope == '*') {
        return multiply(left, right)
    } else {
        return divide(left, right)
    }
}

const display = document.querySelector('input')
const operand = document.querySelectorAll('.number')
operand.forEach((button) => button.addEventListener('click', () => {
    if(operatorPressed){
        display.value = button.textContent;
        operatorPressed = false;
    } else {
        display.value += button.textContent ;
    }
}))

const clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    display.value = "";
    leftOperand = "";
    operator = "";
    rightOperand = "";
})

const equal = document.querySelector("#equal")
equal.addEventListener('click', () => {
    if (!leftOperand) return;

    rightOperand = parseFloat(display.value);
    let result = operate(leftOperand, rightOperand, operator);
    display.value = result;
    leftOperand = result;
    rightOperand = "";
    operator = "";
})

const sign = document .querySelectorAll(".operator")
sign.forEach((button) => button.addEventListener('click', () => {
    leftOperand = parseFloat(display.value);
    operator = button.textContent;
    operatorPressed = true;
}))
