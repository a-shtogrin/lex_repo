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

const currentSum = (numbers) => {
  let newArr = []
  numbers.reduce((accum, current) => newArr.push(accum + current));
  return newArr
}
console.log("2.", currentSum([2, 3, 5, 7, 11, 13, 17, 19]));

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

let arr = [1, 2, 3, 4, 33];
	let mapArr = arr.map((e) => e + ":" + (7-e)); 
	console.log("3.", mapArr)

//  4.  Напишите код, создающий массив, который будет состоять из первых букв слов строки str

const str = " Privet New per son    ";
let arrLetter = [];
for (let i=0; i< (str.trim()).length; i+=1) {
  if (str[i]===" ") {
    arrLetter.push(str[i+1]);
  }
}
console.log("4.", arrLetter);

// 5. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.




// 6.Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
let arrNumber = [1, 2, 3,9, 88, 7,0, 4];
arrNumber.sort( (a, b) => a - b )

console.log(arrNumber);