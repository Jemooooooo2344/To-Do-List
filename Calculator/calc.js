
const calcSpace = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalsButton = document.getElementById("Equals");

// Storing calculator values
let firstNumber = "";
let secondNumber = "";
let operator = "";
let justCalculated = false;


// Listen for button clicks
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.textContent.trim();

        if (value === "A/C") {
            clearScreen();
        }

        else if (["+", "-", "*", "/"].includes(value)) {
            chooseOperator(value);
        }

        else {
            appendValue(value);
        }

    });

});


// Display numbers
function appendValue(value) {

    if (justCalculated) {
        calcSpace.value = "";
        justCalculated = false;
    }

    calcSpace.value += value;
}


// Addition
function Add(a, b) {
    return a + b;
}


// Subtraction
function Subtract(a, b) {
    return a - b;
}


// Multiplication
function Multiply(a, b) {
    return a * b;
}


// Division
function Divide(a, b) {

    if (b === 0) {
        return "Math Error";
    }

    return a / b;
}


// Select an operator
function chooseOperator(op) {

    if (calcSpace.value === "") return;

    if (justCalculated) {
        firstNumber = Number(calcSpace.value);
        justCalculated = false;
    }

    else {
        firstNumber = Number(calcSpace.value);
    }

    operator = op;

    calcSpace.value = "";

}


// Calculate the result
function calculate() {

    if (operator === "" || calcSpace.value === "") return;

    secondNumber = Number(calcSpace.value);

    let result;

    if (operator === "+") {
        result = Add(firstNumber, secondNumber);
    }

    else if (operator === "-") {
        result = Subtract(firstNumber, secondNumber);
    }

    else if (operator === "*") {
        result = Multiply(firstNumber, secondNumber);
    }

    else if (operator === "/") {
        result = Divide(firstNumber, secondNumber);
    }

    calcSpace.value = result;

    // Prepare for another calculation
    if (typeof result === "number") {
        firstNumber = result;
        operator = "";
        secondNumber = "";
        justCalculated = true;
    }

    else {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        justCalculated = false;
    }

}


// Clear the calculator
function clearScreen() {

    calcSpace.value = "";

    firstNumber = "";
    secondNumber = "";
    operator = "";
    justCalculated = false;

}


// Connect the equals button
equalsButton.addEventListener("click", calculate);
