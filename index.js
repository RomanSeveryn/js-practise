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



// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);






// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arrayy5 = [1, 2, 3];
console.log(arrayy5.reverse());



// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const array6 = [1, 2, 3];
array6.push(4, 5, 6);




// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const array7 = [1, 2, 3];
array7.unshift(4, 5, 6);

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

const array8 = ['js', 'css', 'jq'];
console.log(array8[0]);
array8.shift();


// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
const array9 = ['js', 'css', 'jq'];
console.log(array9[array9.length - 1]);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const array10 = [1, 2, 3, 4, 5];
const array11 = array10.slice(0,3);