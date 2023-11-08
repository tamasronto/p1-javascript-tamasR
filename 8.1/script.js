function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (num1 > 0 && num2 > 0) {
        const result = num1 + num2;
        document.getElementById('result').textContent = `Resultaat: ${result}`;
    } else {
        document.getElementById('result').textContent = "Het getal is te laag";
    }
}

function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (num1 > 0 && num2 > 0) {
        const result = num1 - num2;
        document.getElementById('result').textContent = `Resultaat: ${result}`;
    } else {
        document.getElementById('result').textContent = "Het getal is te laag";
    }
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (num1 > 0 && num2 > 0) {
        const result = num1 * num2;
        document.getElementById('result').textContent = `Resultaat: ${result}`;
    } else {
        document.getElementById('result').textContent = "Het getal is te laag";
    }
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (num1 > 0 && num2 > 0) {
        const result = num1 / num2;
        document.getElementById('result').textContent = `Resultaat: ${result}`;
    } else {
        document.getElementById('result').textContent = "Het getal is te laag";
    }
}
