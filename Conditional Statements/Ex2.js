function showSign() {
    var fstNum = parseInt(document.getElementById('firstNumber').value);
    var sndNum = parseInt(document.getElementById('secondNumber').value);
    var trdNum = parseInt(document.getElementById('thirdNumber').value);
    if (fstNum < 0 ^ sndNum < 0 ^ trdNum < 0) {
        alert('The sign is negative ( - )');
    }
    else {
        alert('The sign is positive ( + )')
    }
}