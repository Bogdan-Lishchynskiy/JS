
        function pairNum(arr) {
            let pair = arr.filter(function (num) {
                if (num % 2 === 0) {
                    return num;
                }

            });
            console.log(pair);
        }

        pairNum([1, 5, 2, 23, 4, 2, 5, 6]);
