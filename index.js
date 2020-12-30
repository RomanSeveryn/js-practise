// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
const arr1 = [3, 7];

function getMin(arr) {
let minValue = arr[0];
for(let i = 0; i < arr.length; i++) {
  if(minValue > arr[i]) {
    minValue = arr[i];
    
  }
  
}
return minValue;
};


function getMax(arr) {
  let maxValue = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(maxValue < arr[i]) {
      maxValue = arr[i];
      
    }
    
  }
  return maxValue;
  };


  function getMiddle(arr) {
    let middleValue = 0;
    for(let i = 0; i < arr.length; i++) {
      middleValue += arr[i];
    }
    return middleValue / arr.length;
  };




  function randomValue(min, max) {
    let value =  Math.random() * (max - min) + min;
    return Math.ceil(value);
  }
   
