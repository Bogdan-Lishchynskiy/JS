function reverseNum(num) {
    let str = num.toString();
    let arr = str.split("");
    let reverseArr = arr.reverse();
    let reverseNumber = +reverseArr.join("");
}
reverseNum(123456789);