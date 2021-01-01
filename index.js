// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
const arr1 = [3, 7];

function getMin(arr) {
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];

    }

  }
  return minValue;
};


function getMax(arr) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];

    }

  }
  return maxValue;
};


function getMiddle(arr) {
  let middleValue = 0;
  for (let i = 0; i < arr.length; i++) {
    middleValue += arr[i];
  }
  return middleValue / arr.length;
};



// Выведите на экран случайное целое число от 1 до 100.
function randomValue(min, max) {
  let value = Math.random() * (max - min) + min;
  return;
}

// Заполните массив 10-ю случайными целыми числами. 
function getArrayRandom() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let value = Math.random() * (100 - 1) + 1;
    arr[i] = Math.ceil(value);
  }
  return arr;
}