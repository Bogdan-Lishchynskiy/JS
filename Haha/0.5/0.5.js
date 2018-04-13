        function convertMoney() {
            let usd = +prompt("Enter number to convert USD to UAH:");
            let convert = usd * 27;
            alert(usd + '$' + ' = ' + convert + 'UAH');

            let uah = +prompt("Enter number to convert UAH to USD:");
            let conv = uah / 27;
            alert(uah + 'UAH' + ' = ' + conv + '$');
        }
        convertMoney();
