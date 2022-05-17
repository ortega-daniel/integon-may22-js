function executeAddition() {
    let x = parseFloat(document.querySelector("#num-x").value);
    let y = parseFloat(document.querySelector("#num-y").value);

    console.log(add(x, y));
}

function executeSubstraction() {
    let x = parseFloat(document.querySelector("#num-x").value);
    let y = parseFloat(document.querySelector("#num-y").value);

    console.log(substract(x, y));
}

function executeMultiplication() {
    let x = parseFloat(document.querySelector("#num-x").value);
    let y = parseFloat(document.querySelector("#num-y").value);

    console.log(multiply(x, y));
}

function executeDivition() {
    let x = parseFloat(document.querySelector("#num-x").value);
    let y = parseFloat(document.querySelector("#num-y").value);

    console.log(divide(x, y));
}

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}