
    function compareNumeric(a, b) {
      return a - b;
    }

    function highAndLow(arr) {
      arr.sort(compareNumeric);
      let max = arr[arr.length - 1];
      let min = arr[0];

      console.log('max val: ' + max + ' and min val: ' + min);

    }
    highAndLow([1, 92, -5, 25])
          
