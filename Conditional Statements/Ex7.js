function findGreatest() {
    var fstNum = parseInt(document.getElementById('firstNumber').value);
    var sndNum = parseInt(document.getElementById('secondNumber').value);
    var trdNum = parseInt(document.getElementById('thirdNumber').value);
    var fthNum = parseInt(document.getElementById('fourthNumber').value);
    var fifthNum = parseInt(document.getElementById('fifthNumber').value);
    if (fstNum > sndNum && fstNum > trdNum && fstNum > fthNum && fstNum > fifthNum) {
        alert('The first number: ' + fstNum + ' is the biggest');
    }
    else if (sndNum > fstNum && sndNum > trdNum && sndNum > fthNum && sndNum > fifthNum) {
        alert('The second number: ' + sndNum + ' is the biggest');
    }
    else if (trdNum > fstNum && trdNum > sndNum && trdNum > fthNum && trdNum > fifthNum) {
        alert('The third number: ' + trdNum + ' is the biggest');
    }
    else if (fthNum > fstNum && fthNum > sndNum && fthNum > trdNum && fthNum > fifthNum) {
        alert('The fourth number: ' + fthNum + ' is the biggest');
    }
    else {
        alert('The Fifth number: ' + fifthNum + ' is the biggest');
    }
}