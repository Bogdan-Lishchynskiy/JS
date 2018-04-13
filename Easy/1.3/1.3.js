
        function avrg(valueAvrg) {
            let count = valueAvrg.length;
            valueAvrg = valueAvrg.reduce((previous, current) => current += previous);
            valueAvrg /= count;
            console.log(valueAvrg);
        }
        avrg([2, 563, 3]);