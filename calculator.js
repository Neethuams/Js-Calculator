let operator= '';
let num1 = '';
let num2 = '';
let historyElement = document.getElementById('history');

function saveOperator(op) {
    operator = op;
    historyElement.innerHTML += op;
}

function saveNumber(num) {
    if(operator == '') {
        num1 += num;
    } else {
        num2 += num;
    }
    historyElement.innerHTML += num;
}

function clearAll() {
    operator = '';
    num1 = '';
    num2 = '';

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '0.00';
    historyElement.innerHTML = '';
}

function findAnswer() {
    let result = calculate(num1, num2, operator);
    const resultElement = document.getElementById('result');

    resultElement.innerHTML = result.toFixed(2);
}

/**
 * Calculate Function
 */
function calculate(num1, num2, operator){
    const evaluationString = num1 + operator + num2; // 20 + '+' + 10 = "20+10"
    return eval(evaluationString); // "20+10" = 30
}