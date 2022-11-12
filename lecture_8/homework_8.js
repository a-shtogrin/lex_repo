/* -------Практика из лекции------ */

// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

let obj = { name: "Ann", age: 10 };
let objNew1 = Object.assign({ city: "NN" }, obj);
let objNew2 = { ...obj };
objNew2.class = 3;
console.log(obj);
console.log(objNew1);
console.log(objNew2);

// Написать функцию  которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).

const arrSum = (...n) => {
  let sum = 0;
  for (let i of n) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(arrSum(10, 10, 10));

// Написать функцию  которая будет принимать два массива, и в качестве результата будет возвращать только  те значения которые есть и в первом и во втором массиве.

const sameValue = (arr1, arr2) => {
  for (let i of arr1) {
    if (arr2.find((e) => e === i) !== undefined) {
      console.log(i);
    }
  }
};
sameValue([1, 2, 0, 9, 8, 7, 6, 5, 4, 3, 19, 1], [2, 4, 0]);

/* 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
 */

const stringLengthArr = (arr) => {
  let newArr = arr.map((e) => e.length);
  return newArr;
};
console.log("1.", stringLengthArr(["qwerty", "qwer", "asdffgh"]));

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const currentSum = (numbers) => {
//   let newArr = [];
//   numbers.reduce((accum, current) => newArr.push(accum + current));
//   return newArr;
// };
// console.log("2.", currentSum([2, 3, 5, 7, 11, 13, 17, 19]));

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

const currentSums = (numbers) => {
  let result = [];
  numbers.reduce((pre, cur, ind) => (result[ind] = pre + cur), 0);
  return result;
};

console.log(currentSums("2.", numbers));

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

let arr = [1, 2, 3, 4, 33];
let mapArr = arr.map((e) => e + ":" + (7 - e));
console.log("3.", mapArr);

//  4.  Напишите код, создающий массив, который будет состоять из первых букв слов строки str

const str = " Privet New per son    ";
let arrLetter = [];
for (let i = 0; i < str.trim().length; i += 1) {
  if (str[i] === " ") {
    arrLetter.push(str[i + 1]);
  }
}
console.log("4.", arrLetter);

// 5. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

const str0 = "JavaString";
const strSymbols = (str0) => {
  const result = [];
  for (let i = 0; i < str0.length; i += 1) {
    if (i === 0) {
      result.push(str0.slice(0, 2));
    } else if (i === str0.length - 1) {
      result.push(str0.slice(-2));
    } else {
      result.push(str0.slice(i - 1, i + 2));
    }
  }
  return result;
};
console.log("5.", strSymbols(str0));

// Другое решение:

const massThreeLet = (str0) => {
  let arr = [];
  for (let i = 0; i < str0.length; i++) {
    arr.push(str0.substring(i - 1, i + 2));
  }
  return arr;
};

console.log("5.", massThreeLet(str0));

// 6.Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
let arrNumber = [1, 2, 3, 9, -7, 88, 7, 0, 4];
arrNumber.sort((a, b) => a - b);

console.log("6.", arrNumber);

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

const arr1 = [4, 0, 3];
const arr2 = [4, 5, 13];
const arr3 = [7, 1, 9];

console.log(
  "7.",
  arr1.concat(arr2, arr3).sort((a, b) => b - a)
);

// Другое решение:

const sortArr = (arr1, arr2, arr3) =>
  [...arr1, ...arr2, ...arr3]
    .sort((a, b) => b - a)
    .join(" ")
    .split();
console.log("7.", sortArr(arr1, arr2, arr3));

// 8.Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const twoArr = [[1, 10, 3], [4, 5], [6]];

console.log(
  "8",
  twoArr.flat().reduce((sum, el) => sum + el)
);

// 9.Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myReturnArr = [];
myArr.forEach((e) => myReturnArr.unshift(e));
console.log("9.", myReturnArr);
console.log(myArr);

// 10.Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const arrTen = [1, 1, 9, 6, 4, 2, 4, 5, 6, 7];
let count = 0;
let sum = 0;
for (const i of arrTen) {
  if (sum <= 10) {
    count += 1;
    sum += i;
  } else {
    console.log("10.", count);
    break;
  }
}

// 11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

const arrayFill = (el, number) => {
  let sameElArr = [];
  for (let i = 0; i < number; i++) {
    sameElArr.push(el);
  }
  return sameElArr;
};
console.log("11.", arrayFill("privet!", 5));
