// script.js
function convertToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const resultElement = document.getElementById('result');

    if (!/^[01]{1,8}$/.test(binaryInput)) {
        resultElement.textContent = 'Please enter a valid 8-bit binary number.';
        return;
    }

    let decimal = 0;
    const length = binaryInput.length;

    for (let i = 0; i < length; i++) {
        const bit = binaryInput[length - i - 1];
        if (bit === '1') {
            decimal += Math.pow(2, i);
        }
    }

    resultElement.textContent = `Decimal equivalent: ${decimal}`;
}

function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const reconvertResultElement = document.getElementById('reconvertResult');
    
    if (!/^\d+$/.test(decimalInput) || parseInt(decimalInput) < 0 || parseInt(decimalInput) > 255) {
        reconvertResultElement.textContent = 'Please enter a valid decimal number between 0 and 255.';
        return;
    }

    let decimal = parseInt(decimalInput);
    let binary = '';

    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }

    binary = binary.padStart(8, '0');
    reconvertResultElement.textContent = `Binary equivalent: ${binary}`;
}
