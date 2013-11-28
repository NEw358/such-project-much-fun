function sortNumbers() {
    var fstNum = parseInt(document.getElementById('firstNumber').value);
    var sndNum = parseInt(document.getElementById('secondNumber').value);
    var trdNum = parseInt(document.getElementById('thirdNumber').value);
    if (fstNum > sndNum) {
        if (fstNum > trdNum) {
            if (sndNum > trdNum) {
                alert('The descending order is: ' + fstNum + '>' + sndNum + '>' + trdNum);
            }
            else {
                alert('The descending order is: ' + fstNum + '>' + trdNum + '>' + sndNum);
            }
        }
        else {
            alert('The descending order is: ' + trdNum + '>' + fstNum + '>' + sndNum);
        }
    }
    else {
        if (sndNum > trdNum) {
            if (trdNum > fstNum) {
                alert('The descending order is: ' + sndNum + '>' + trdNum + '>' + fstNum);
            }
            else {
                alert('The descending order is: ' + sndNum + '>' + fstNum + '>' + trdNum);
            }
        }
        else {
            alert('The descending order is: ' + trdNum + '>' + sndNum + '>' + fstNum);
        }
    }
}