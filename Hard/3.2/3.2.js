
        function validate(arr, obj) {
            let propArr = Object.keys(obj);
            console.log(propArr);
            for (i = 0; i < arr.length; i++) {
                if (arr[i] !== propArr[i]) {
                    throw ('error this el from array wasnt passed on object');
                } else {
                    console.log('Ok')
                }
            }

        }
        arr1 = ["name", "age", "surname"];
        obj1 = {
            name: "Roman",
            surname: "Rodomansky"
        };
        validate(arr1, obj1);
