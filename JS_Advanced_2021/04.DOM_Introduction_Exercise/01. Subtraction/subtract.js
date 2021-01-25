function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);
    const sum = firstNum - secondNum;
    document.getElementById('result').textContent = sum;
}