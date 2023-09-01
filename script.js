let operand1 = null;
let operand2 = null;
let operator = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error!";
    }
}

let buttons = document.querySelectorAll('#calculator button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let buttonText = e.target.textContent;
        console.log(`Button click: ${buttonText}`);

        if (!isNaN(parseFloat(buttonText))
            || buttonText === "0") {
            if (operator === null) {
                if (operand1 === null) {
                    operand1 = parseFloat(buttonText);
                } else {
                    operand1 = parseFloat(operand1.toString() + buttonText);
                }
                updateDisplay(operand1);
            } else {
                if (operand2 === null) {
                    operand2 = parseFloat(buttonText);
                } else {
                    operand2 = parseFloat(operand2.toString() + buttonText);
                }
                updateDisplay(operand2);
            }
        } else if (buttonText === "+"
            || buttonText === "-"
            || buttonText === "*"
            || buttonText === "/") {
            operator = buttonText;
        } else if (buttonText === 'C') {
            operand1 = null;
            operand2 = null;
            operator = null;
            updateDisplay("0");
        } else if (buttonText === "=") {
            if (operand1 !== null
                && operand2 !== null
                && operator !== null) {
                updateDisplay();
            }
        }
    });
});

function updateDisplay(value) {
    let display = document.querySelector('#display');
    if (value !== undefined) {
        display.value = value;
    } else {
        let result;
        switch (operator) {
            case "+":
                result = add(operand1, operand2);
                break;
            case "-":
                result = subtract(operand1, operand2);
                break;
            case "*":
                result = multiply(operand1, operand2);
                break;
            case "/":
                result = divide(operand1, operand2);
                break;
            default:
                display.value = "Empty";
                return;
        }
        display.value = result;
    }
}

updateDisplay();




