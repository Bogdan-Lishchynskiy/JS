       function combString(str) {
    let lenStr = str.length;
    let result = [];
    let indexCurrent = 0;
    while (indexCurrent < lenStr) {
        let char = str.charAt(indexCurrent);
        let x;
        var arrTemp = [char];
        for (x in result) {
            arrTemp.push("" + result[x] + char);
        }
        result = result.concat(arrTemp);

        indexCurrent++;
    }
    return result;
}
console.log(combString("dog"));
