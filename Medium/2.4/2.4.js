function firstLetbig(word) {
    let arr = word.split(' ');
    let tranformArr = arr.map(function (num) {
        return num[0].toUpperCase() + num.substr(1);
    });
    return tranformArr.join(' ');

}
console.log(firstLetbig('the quick brown fox'));