
/* let currentDay = "Suterday"
console.log (currentDay); */

/* console.log(typeof(‘true’));
console.log(typeof(‘Ivan’/4)); */

 typeof String(38)

/* Преобразование строки в число */
const name = "Alex"

const nameToNumber = Number(name);

console.log(nameToNumber)

/* Преобразование числа в строку */
const age = 25

const ageToString = String(age)

console.log(typeof ageToString)

/* Преобразование null в число */
const nullValue = null

console.log(Number(nullValue))

/* Преобразование в булевое значение */
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean({}))  /* литерал объекта */

/* Унарны плюс */
console.log(typeof +"45")
console.log(typeof Number("45"))

/* Особенности сложения (есть конкантинация если при бинарном сложении есть строка) */
console.log(2 +2 + '3')  /*  Результат вычисления - Строка */
console.log("2" +2 + 3)  /*  Результат вычисления - Строка */
console.log("2" + '3')  /*  Результат вычисления - Строка */
console.log(2 + 3)  /*  Результат вычисления - Число */

/* Конкантенации нет с другими математ операциями (результат этих вычислений становится числом) */
console.log("3" - '2')
console.log("3" * "2");

/* Сравнения (результат сравнения всегда булево значение*/

console.log(2 == 2);
console.log(2 >= 3);
console.log(2 != 3);
console.log(false == 0);

/* При сравнении значений разных типов JavaScript (исключение: ===) приводит каждое из них к числу. */

console.log(2 == '2'); //true
console.log(2 === '2'); //false

console.log('--------------------------');

// ----------Практика------------

// /n - новая строка
// /t - табуляция

console.log(5 > 4);
console.log("ананас" > "яблоко");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null === +"\n0\n");
console.log(0 === +"\n0\n");
console.log("" + 1 + 0); //string
console.log("" - 1 + 0); //number
console.log(true + false);  //number
console.log(6/"3"); //есть числовое преобразование
console.log("2" * "3"); //есть числовое преобразование
console.log(4+5+"px");   //нет числового преобразования (т.к бинарный +)
console.log("$"+4+5);  //нет числового преобразования (т.к бинарный +)
console.log("4" - 2); //есть числовое преобразование
console.log("4px" - 2); //NaN
console.log(7/0);
console.log("-9" + 5);  //нет числового преобразования (т.к бинарный +)
console.log(" -9 " + 5); //нет числового преобразования (т.к бинарный +)
console.log("-9"-5);   //есть числовое преобразование
console.log(null+1);   //есть числовое преобразование
console.log(undefined+1);  //есть числовое преобразование
console.log("\t\n"-2);   // \t\n - преобразуется в 4 пробела и перенос строки, после преобразования будет 0

console.log('--------------------------');

// _______Массивы_______________

const towns = ["Moscow", "London", "Paris", "Novgorod"]
console.log(towns);
towns[1]="Minsk"
console.log(towns);
console.log(towns[0]); //Moscow
towns[4] = "Astana"
towns[9] = "Berlin"
console.log(towns);

console.log(typeof {});
console.log(typeof []);

let fruits = [];
fruits[100] = "Яблоко";
console.log( fruits.length ); // 101

let example = ["a", "b", "c"];
example.push("d")
example[example.length] = "e"

console.log(example);
example.pop()
console.log(example);
example.shift()
console.log(example);

console.log('--------------------------');

// ----------Практика------------

let films = ["Челюсти", "Крик", "Один дома", "Подвал"]
console.log(films[0]);
console.log(films);
films.unshift("Конец")
console.log(films);
console.log(films[films.length-1]);