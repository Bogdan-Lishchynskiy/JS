var findChar = function (str) {
    var char;
    for (var i = 0; i < str.length; i++) {
        if (i === str.lastIndexOf(str[i])) {
            char = str[i];
            break;
        }
    }
    return char;
}
console.log(findChar("abaaecddbcaaa"));
