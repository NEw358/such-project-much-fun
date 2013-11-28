function calculateRoots() {
    var aCoeff = parseInt(document.getElementById('aCoeff').value);
    var bCoeff = parseInt(document.getElementById('bCoeff').value);
    var cCoeff = parseInt(document.getElementById('cCoeff').value);
    var D = bCoeff * bCoeff - (4 * aCoeff * cCoeff);
    if (D > 0) {
        var root1 = (-bCoeff + Math.sqrt(D)) / (2 * aCoeff);
        var root2 = (-bCoeff - Math.sqrt(D)) / (2 * aCoeff);
        alert('Root 1 is: ' + root1 + ', and root 2 is:' + root2 + '  (D > 0)');
    }
    else if (D < 0) {
        alert('This equation has no real roots (D < 0)');
    }
    else {
        var root3 = -bCoeff / 2 * aCoeff;
        alert('The Root is: ' + root3 + '  (D = 0)');
    }
}
