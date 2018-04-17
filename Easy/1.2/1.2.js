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

          
