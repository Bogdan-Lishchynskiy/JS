function maxMinValue(arr) {
      var min = arr[0],
      max = min;
  for (var i = 0; i < arr.length; i++){
      if(arr[i]<min) {
          min = arr[i];
      }else if (arr[i]>max){
          max = arr[i];
      }
  }
  console.log('Min el = '+min);
  console.log('Max el = '+max);
}
maxMinValue(([1, 92, -5, 25]));






















    // function compareNumeric(a, b) {
    //   return a - b;
    // }

    // function highAndLow(arr) {
    //   arr.forEach(el => {
        
    //   });(compareNumeric);
    //   let max = arr[arr.length - 1];
    //   let min = arr[0];

    //   console.log('max val: ' + max + ' and min val: ' + min);

    // }
    // highAndLow([1, 92, -5, 25])
          
