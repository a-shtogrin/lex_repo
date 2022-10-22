// -------------- Функции--------------------------

//Определение функции
function showMessage(message) {
  console.log(message);
}

//вывод функции
showMessage("jasdhfsj");
showMessage("фыфым");
showMessage("уууууj");

// function sum(a, b=2) {
//     return(a + b);
// }
// b=2 - параметр по умолчанию, используется еcли мы не определили параметр b, всегда пишется в конце.
/* const result = sum (1, 5)
console.log(result);

function positiveSum(a,b) {
    if (a>0 && b>0) {
        return a + b;
    } 
    return (console.log("НЕТ"));
}

console.log(positiveSum(4, 1)); */

// function getName() {
//     const userName = "Ivan"
//     return userName
// }

// console.log(getName());

/* let name ="Alex";
function sayHi(message = "hello") {
    name = "Ivan"
    console.log(`${message} - ${name}`);
}
console.log(name);
 sayHi()
 console.log(name);

 function sum(a, b) {
    const result3 = a+b
    a +=1
    console.log(result3);
 } */
/* 
 sum(2,2) */

function sayHello(name = "Гость") {
  return console.log(`Hello - ${name}`);
}
sayHello("hfhfhf");

function exponentiation(number, degree = 1) {
  return number ** degree;
}

console.log(exponentiation(2, 3));

const arr = [3, 7, 3, 7, 4];
function getAverage(array) {
  sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum = sum + array[i];
  }
  return sum / array.length;
}

console.log(getAverage(arr));

const sayHello2 = function (name) {
  // анонимная функция
  console.log(`Hello ${name}`);
};

const funcExample = function (callback) {
  for (let i = 0; i < 1000000000; i += 1) {}
  callback("Fran");
};
sayHello2("July");
funcExample(sayHello2);

// Отличия функций декларейшон и экспланейшон

//декларейшон (можно запустить функция до определения)
summa(1, 2);

function summa(a, b) {
  console.log(a + b);
}

//экспланейшон (НЕЛЬЗЯ запустить функцию до определения)

// multiply (1, 2);

const multiply = function (a, b) {
  console.log(a * b);
};

multiply(3, 2);

const getSurname = (name) => `Surname ${name}`;

console.log(getSurname("KKOl"));

const getSecond = (secondName) => {
  return `Second name - ${secondName}`;
};

console.log(getSecond("Ivanovich"));

const quatro = (a) => a ** 2;
console.log(quatro(3));

// Практика

const typeString = (string, n) => {
  for (let i = 0; i < n; i += 1) {
    console.log(string);
  }
  return;
};

typeString("Ку-Ку", 5);

const vowelArr = ["e", "y", "u", "o", "a", "i"];

const getVowel = (letter) => {
  for (let i = 0; i < vowelArr.length; i += 1) {
    if (vowelArr[i] === letter) {
      return console.log(true);
    }
  }
  return console.log(false);
};

getVowel("i");

/* Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае*. */

const palindrome = (word) => {
  const j = word.length - 1;
  let count = 0;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === word[j - i]) {
      count += 1;
    }
  }
  if (count == word.length) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

palindrome("da02ad");
