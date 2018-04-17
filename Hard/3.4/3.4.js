function findDuplicate(data) {
    let result = [];
    data.forEach(function (element, index) {
        if (data.indexOf(element, index + 1) !== -1) {
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
    });
    return result;
}
var arr = [1, 1, 1, 1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
findDuplicate(arr);