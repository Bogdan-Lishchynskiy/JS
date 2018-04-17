function printNumbers(n) {
    console.log(n);
    if (n === 0) return;
    return printNumbers(n - 1);
}

console.log(printNumbers(4));