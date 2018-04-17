function convertMoney() {
    var regExpOnlyNumbers = /^[0-9]*$/;
    do {
        var usd = +prompt("Enter number to convert USD to UAH:", 33);
    } while (!regExpOnlyNumbers.test(usd) == true);
    var convert = usd * 27;
    alert(usd + '$' + ' = ' + convert + 'UAH');

    do {
        var uah = +prompt("Enter number to convert UAH to USD:", 33);
    } while (!regExpOnlyNumbers.test(uah) == true);
    var conv = uah / 27;
    alert(uah + 'UAH' + ' = ' + conv + '$');
}

convertMoney();
