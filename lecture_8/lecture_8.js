// Продолжение лекции №7, объекты

const number = 1;

const increment = (a) => {
  console.log(a, "before");
  a += 1;
  console.log(a, "after");
};

console.log(number, "one");
increment(number);
console.log(number, "two");

const arr = [1, 2, 3, 4];

const arrPush = (arr) => {
  arr.push(5);
};
console.log(arr, "one");
arrPush(arr);
console.log(arr, "two");

const user = { name: "Alex" };
const user2 = user;
user.age = 18;
user2.name = "Ivan";

console.log(user);
console.log(user2);

const user3 = Object.assign({}, user, { city: "London" });
user.surname = "Ivanov";
user3.name = "Tony";
console.log(user);
console.log(user3);

const arr4 = [1, 2, 3];

const arr6 = [...arr4];
arr4.push(4);
console.log(arr4);
console.log(arr6);

//  JSON.parse() - из строки в объект
//  JSON.stringify() - из объекта в строку

//  console.log(JSON.stringify(user), user);

const user22 = JSON.parse(JSON.stringify(user2));

user2.name = "Misha";
user22.age = 102;

console.log(user2);
console.log(user22);

//рест оператор

const infinitySum = (a, b, ...arg) => {
  return arg.reduce((accum, cur) => accum + cur, a + b);
};
console.log(infinitySum(1, 23));

const user0 = { name: "Mike", age: 50, city: "NN" };

const userName = user0.name;
console.log(userName, "userName");
// const {name} = user0;

const { name, ...restParams } = user0;
console.log(name, "name");
console.log(restParams, "restParams"); // деструктуризация - создание переменной из ключа

/* _______Циклы For -OF, FOR-IN_____ */

const arraySum = (arr) => {
  let result = 0;
  for (let value of arr) {
    result += value;
  }
  return result;
};
console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const arrM = ["Tony", "Alex", "Ivan"];
const obj = { name: "Jone", age: 20 };
for (let value of arrM) {
  console.log(value);
}

for (let value in obj) {
  console.log(value);
}

for (let value in obj) {
  console.log(obj[value]);
}
