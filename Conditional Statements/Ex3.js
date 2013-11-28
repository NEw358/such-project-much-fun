function findBiggest() {
    var fstNum = parseInt(document.getElementById('firstNumber').value);
    var sndNum = parseInt(document.getElementById('secondNumber').value);
    var trdNum = parseInt(document.getElementById('thirdNumber').value);
    if (fstNum > sndNum) {
        if (fstNum > trdNum) {
            alert('The first number: ' + fstNum + ' is the biggest');
        }
        else {
            alert('The third number: ' + trdNum + ' is the biggest');
        }
    }
    else {
        if (sndNum > trdNum) {
            alert('The second number: ' + sndNum + ' is the biggest');
        }
        else {
            alert('The third number: ' + trdNum + ' is the biggest');
        }
    }
}