/* if(true) {
    console.log("true");
}

if(false) {
    console.log("false");
} */

const name = "Jon";

if (name === "Alex") {
  console.log(`Привет друг ${name}`);
} else if (name === "Ivan") {
  console.log("Привет Vano");
} else if (name === "Jon") {
  console.log(`Hi ${name}`);
} else {
  console.log("Привет никто");
}

/* if(true) {
    if (true) {
        console.log("true");
    } else {
        console.log("false");
    }
} else {
    console.log("false");
} */

//Тернарное выраженеи

const userName = "Alx";
const result = userName === "Alex" ? "hello Alex" : "hrllo user";
console.log(result);

/* задача 1 */

const segment1 = 10;
const segment2 = 2;
const segment3 = 7;

/* первый вариант решения */
if (segment1 > segment2) {
  if (segment1 > segment3) {
    console.log(`наибольший отрезок ${segment1}`);
  } else {
    console.log(`наибольший отрезок ${segment3}`);
  }
} else if (segment2 > segment3) {
  console.log(`наибольший отрезок ${segment2}`);
} else {
  console.log(`наибольший отрезок ${segment3}`);
}

/* Второй вариант решения - Лучше!*/

if (segment1 < segment2) {
  segment2 < segment3
    ? console.log(`наибольший отрезок ${segment3}`)
    : console.log(`наибольший отрезок ${segment2}`);
} else {
  segment1 < segment3
    ? console.log(`наибольший отрезок ${segment3}`)
    : console.log(`наибольший отрезок ${segment1}`);
}

/* третий вариант (есть косяк)*/

if (segment1 < segment2 && segment2 < segment3) {
  console.log(`наибольший отрезок ${segment3}`);
} else if (segment1 < segment2 && segment2 > segment3) {
  console.log(`наибольший отрезок ${segment2}`);
} else if (segment1 < segment3) {
  console.log(`наибольший отрезок ${segment3}`);
} else {
  `наибольший отрезок ${segment1}`;
}

/* Задача 2 */

const userRole = "user";
switch (userRole) {
  case "admin":
    console.log("admin is slipping");
    break;
  case "user":
    console.log("пользователь");
    break;
  case "manager":
    console.log("манагеры рулят!");
    break;
  default:
    console.log("nobody");
    break;
}

/* Задача 3 */

const temp = 100;

if (temp <= -30) {
  console.log("Оставайтесь дома!");
} else if (temp >= -10 && temp <= 5) {
  console.log("Сегодня холодно");
} else if (temp > 5 && temp <= 15) {
  console.log("Не холодно");
} else if (temp > 15 && temp <= 25) {
  console.log("Тепло");
} else if (temp > 25 && temp <= 35) {
  console.log("Жарко");
} else if (temp > 35) {
  console.log("Пекло!!!");
}

/* 
Цыклы */

let i = 0;

while (i < 5) {
  console.log(i);
  i = i + 1; // лучше написать i += 1 (можно еще увеличавать на 1: i++)
}

console.log("Цикл FOR");

for (let j = 0; j < 7; j += 1) {
  console.log(j);
}
let pp = 0;

// BREAK

while (true) {
  if (pp < 5) {
    pp += 1;
  } else {
    break;
  }
  console.log(pp);
}

//continue

for (let i = 0; i <= 5; i++) {
  if (i === 1 || i === 3) {
    continue;
  }
  console.log(i);
}

console.log("---------------------------------------------");

const arr = [1, 3, 5, 6, 9, 12, 14, 16, 17, 18, 21, 25, 65, 37];

const result2 = [];

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 === 0) {
    result2.push(arr[i]);
  }
}
console.log(result2);
