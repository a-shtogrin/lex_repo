/* Лекция №6 Примитивы. Обьекты */

//Ключи в объекте всегда строки!!!!!!!

const key = "name";

const person = {
  [key]: "Alex",
  sayHello: function () {
    console.log("Привет я Alex");
  },
};
console.log(person);

person.age = 56;

person["city-name"] = "NN"; //Использовать этот способ когда в имени есть -

console.log(person.name);
console.log(person["city-name"]);

person.name = "Anton";
person.age = "78";

console.log(person.name, person.age);

console.log(person.height);
person.height = 175;
console.log(person.height);

delete person.height;
console.log(person.height);

person.sayHello();

const sayBuy = function () {
  console.log("Buy-Buy");
};

person.sayBuy = sayBuy;

person.sayBuy();

//Задача1
/* Создайте объект myFavoriteFilm, описывающий ваш любимый фильм. Объект должен содержать свойства с названием фильма, с датой выпуска, именем режиссера и страной выпуска.
 */

const myFavoriteFilm = {};

myFavoriteFilm.dateFilm = "08.1970";
myFavoriteFilm.directorFilm = "Ivanov";
myFavoriteFilm.countryFilm = "SovetUnion";
myFavoriteFilm.moneyFilm = "1000000";

console.log(myFavoriteFilm);

const sayNameFilm = function() {
    console.log("Shurik");
}
myFavoriteFilm.sayNameFilm = sayNameFilm;
myFavoriteFilm.sayNameFilm();

delete myFavoriteFilm.dateFilm;

console.log(myFavoriteFilm);


// Примитивы как объект

const number =100;
console.log(number.toString());


/* Объект Math */

let num = 12.55;
console.log(Math.round(num));
console.log(num.toFixed(1));
console.log(+num.toFixed(1));

//Символы в строках не меняются
const str = "Hello";
str[0] = "h";
console.log(str[0]);

//Практика
/* Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.
 */

const isLetterUpper = (str, n) => {
    if (n < str.length) {
        if (str[n] === str[n].toUpperCase()) {
            return true;
        } return false;
    } else {
        return "n > str.length";
    }
}

console.log(isLetterUpper("heLLo", 5));

/* Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.
 */

/* 
const replaceStr = (str, find, replace) => {
    let newStr = "";
    for (let i = 0; i < str.length;) {
        newStr += str.slice(i, str.indexOf(find, i)+ find.length) + replace
        i = str.indexOf(find, i) + find.length; //4
        }       
return newStr;
}

console.log(replaceStr("112233442266", "22", "qqq")); */

console.log( Math.floor( Math.random()*4))
