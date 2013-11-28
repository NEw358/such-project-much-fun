function nameOfNumber() {
    var num = parseInt(document.getElementById('number').value);
    var edinici = 0;
    var desetici = 0;
    var stotici = 0;
    var string = "";


    if (num < 0 || num > 999) {
        alert('This number is not in range (0; 999)');
    }
    else {
        edinici = num % 10;
        desetici = (num/10) % 10;
        stotici = (num/100) % 10;

        if (number == 0 ) {
            alert ('zero');
        }

        if (stotici != 0) {
            alert (returnTextnumber(stotici) + "hundred" );
        }

        if (desetici != 0) {
            if (desetici == 1) {
                if (stotici != 0){

    }

    function returnTextnumber(number){
        var str = "";
        switch (number) {
            case 1: str = "one"; break;
            case 2: str = "two"; break;
            case 3: str = "three"; break;
            case 4: str = "four"; break;
            case 5: str = "five"; break;
            case 6: str = "six"; break;
            case 7: str = "seven"; break;
            case 8: str = "eight"; break;
            case 9: str = "nine"; break;
            case 10: str = "ten"; break;
        }
        return str;
    }