const allNumberButtons = document.querySelectorAll('#button-number');
const addButton = document.querySelector('.button-plus');
const minusButton = document.querySelector('.button-minus');
const timesButton = document.querySelector('.button-times');
const divideButton = document.querySelector('.button-divide');
const clearButton = document.querySelector('.button-clear');
const deleteButton = document.querySelector('.button-delete');
const equalButton = document.querySelector('.button-equal');

let currentResult = document.querySelector('.result');

const operatorType = ['plus', 'minus', 'times', 'divide'];

let currentNumberSelection = 0;
let lastNumberSelection = 0;
let currentOperator;
let currentNumberDisplayed = "";
let canDeleteNumberDisplayed = true;

for (let button of allNumberButtons) {
    button.addEventListener('click', function () {
        if (canDeleteNumberDisplayed === false) {
            canDeleteNumberDisplayed = true;
        }
        currentNumberDisplayed += button.textContent;
        currentResult.textContent = currentNumberDisplayed;
        currentNumberSelection = parseInt(currentNumberDisplayed);
    });
}

// operator methods
function UpdateCurrentOperation(operatorID) {
    lastNumberSelection = currentNumberSelection;
    currentOperator = operatorType[operatorID];
    currentNumberDisplayed = "";
}

addButton.addEventListener('click', () => {
    UpdateCurrentOperation(0);
});

minusButton.addEventListener('click', () => {
    UpdateCurrentOperation(1);
});

timesButton.addEventListener('click', () => {
    UpdateCurrentOperation(2);
});

divideButton.addEventListener('click', () => {
    UpdateCurrentOperation(3);
});

// other methods
clearButton.addEventListener('click', () => {
    currentResult.textContent = '0';
    currentNumberSelection = 0;
    lastNumberSelection = 0;
    currentNumberDisplayed = "";
});

deleteButton.addEventListener('click', () => {
    if (canDeleteNumberDisplayed) {
        if (currentNumberDisplayed.length <= 1) {
            currentResult.textContent = "0";
            currentNumberSelection = 0;
            currentNumberDisplayed = "";
        }
        else {
            currentNumberDisplayed = currentNumberDisplayed.slice(0, -1);
            currentResult.textContent = currentNumberDisplayed;
            currentNumberSelection = parseInt(currentNumberDisplayed);
        }
    }
});

equalButton.addEventListener('click', () => {
    switch (currentOperator) {
        case operatorType[0]:
            currentResult.textContent = parseInt(lastNumberSelection) + parseInt(currentNumberSelection);
            break;
        case operatorType[1]:
            currentResult.textContent = parseInt(lastNumberSelection) - parseInt(currentNumberSelection);
            break;
        case operatorType[2]:
            currentResult.textContent = parseInt(lastNumberSelection) * parseInt(currentNumberSelection);
            break;
        case operatorType[3]:
            currentResult.textContent = parseInt(lastNumberSelection) / parseInt(currentNumberSelection);
            break;
    }

    currentNumberSelection = currentResult.textContent;
    currentNumberDisplayed = "";
    canDeleteNumberDisplayed = false;
});