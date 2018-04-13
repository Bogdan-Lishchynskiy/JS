
        function reverseNum(num) {
            let str = num.toString();
            console.log(typeof (str))
            let arr = str.split("");
            let reverseArr = arr.reverse();
            let reverseNumber = +reverseArr.join("");
            console.log(reverseNumber);
        }
        reverseNum(123456789);
