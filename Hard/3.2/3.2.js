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





















// function validate(arr, person)
// {
//     var result = {};
//     for(var i=0; i < arr.length; i++)
//     {
//         if (!(arr[i] in person)){
//             result[arr[i]] = 1;
//         }else{
//             result[arr[i]] += 1;
//         }
//     }
//     for (var prop in result) {
//         if (result[prop] == 1) {
//             throw prop;
//         }
//     }
//     return true;
// };

// try{
//     validate(['surname','name',  'age'],{name:"Roman",surname:"Rodomansky", age: "10"});
//     validate(['name', 'surname', 'age'],{name:"Roman",surname:"Rodomansky"});
// }catch (e) {
//     console.log(e, "wasn't passed on object");
// }