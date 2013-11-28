function exchangeNums() {
    var firstNum = parseInt(document.getElementById('firstNumber').value);
    var secondNum = parseInt(document.getElementById('secondNumber').value);
    if (firstNum > secondNum) {
        firstNum = firstNum + secondNum;
        secondNum = firstNum - secondNum;
        firstNum = firstNum - secondNum;
        alert('First Number is bigger and is exchanged to: ' + firstNum);
    }
    else {
        alert('First number is smaller');
    }
}