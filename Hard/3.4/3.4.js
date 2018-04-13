
        function findDuplicate(arra1) {
            let result = [],
                obj = {};
            for (var i = 0; i < arra1.length; i++) {
                obj[arra1[i]] = 0;
            }
            for (i in obj) {
                result.push(i);
            }
            return result;
        }
        var arr = [1, 1, 1, 1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
