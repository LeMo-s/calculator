function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b; 
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let leftOperand;
let operator;
let rightOperand;

function operate(left, right, ope) {
    if (ope == '+') {
        add(left, right)
    } else if (ope == '-') {
        substract(left, right)
    } else if (ope == '*') {
        multiply(left, right)
    } else {
        divide(left, right)
    }
}