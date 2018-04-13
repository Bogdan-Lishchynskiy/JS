        function celToF(celsius) {
            let cTemp = celsius;
            let cToFahr = cTemp * 9 / 5 + 32;
            let message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
            console.log(message);
        }

        celToF(20);
