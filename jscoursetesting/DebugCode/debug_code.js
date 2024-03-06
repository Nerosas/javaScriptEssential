function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let results = [{function: multiply(num1, num2), label: 'Multiplication'},
        {function: divide(num1, num2), label: 'Division'},
        {function: add(num1, num2), label: 'Addition'},
        {function: subtract(num1, num2), label: 'Subtraction'}];
        displayResult(results);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    debugger;
    return a * b;
}

function divide(a, b) {
    debugger;
    return a / b;
}

function add(a, b) {
    debugger;
    return a + b;
}

function subtract(a, b) {
    debugger;
    return a - b;
}

function displayResult(results, typeOfResult) {
    const resultElement = document.getElementById('results');
    let resultsText = results.map((result, index) => `<p>The ${result.label} result is: ${result.function}</p>`);
    resultElement.innerHTML = resultsText;
}