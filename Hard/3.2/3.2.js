function validate(arr, person) {
    let resObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in person) {
            resObj[arr[i]] = 1 + resObj[arr[i]];
        } else {
            resObj[arr[i]] = 1;
        }
    }
    for (let keys in resObj) {
        if (resObj[keys] === 1) {
            throw keys;
        }
    }
    return true;
};
try {
    let arrayOfProperties = ["name", "age", "surname"];
    let objPerson = {
        name: "Roman",
        surname: "Rodomansky"
    };
    validate(arrayOfProperties, objPerson);
    validate(arrayOfProperties, objPerson);
} catch (er) {
    console.log(er, "don't pass into object ")
}



