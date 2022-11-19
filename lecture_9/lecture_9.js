// Продвинутая работа с функциями

// ----this----

// console.log(this);

// var TEST = "TEST"
// console.log(this.TEST);


// // function test() {
// //   console.log(this);
// // }
// // test();

// console.log(globalThis);

function example() {
    console.log(this, "this");
}
// example();

const testObject = {
testMethod: example,
}

const exampleObj = {
    exampleMethod: example,
    exampleValue: "@###"
}

// example();
testObject.testMethod();
exampleObj.exampleMethod();


const persona = {
    name: "Alex",
    age: 26,
    getName: function () {
        console.log(this.name);
    }
}

persona.getName()

const city ={
    name: "NN",
    population: 1000000,
    getName: function () {
        console.log(this.name);
        return this.name;
    },
    getpoPulation: function () {
        console.log(this.population);
        return this.population;
    },
    setValue: function(key, value) {
        this[key] = value; 
    }
}

city.setValue("name", "Moscow")
city.setValue("country", "Russia")
console.log(city);

// Методы ccall  and applay

const user1 = {
    name: "Vasya",
    surname: "Ivanov"
}
const user2 = {
    name: "Pety",
    surname: "Kozlov"
}
const user3 = {
    name: "Lex",
}

function greeting(phrase) {
    console.log(`${this.name} ${this.surname} : ${phrase}`);
}

greeting.call(user1,"Hello")
greeting.call(user2,"Buy")
greeting.call(user3,"КУ-КУ")

const greetingUser1 = greeting.bind(user1, "Привет")

greetingUser1()

const greetingUser2 = greeting.bind(user2)
greetingUser2("Да не на")

//-------------------------------------------------

const city2 ={
    name: "Paris",
    population: 1000,
}

city.getName.call(city2)

const setNameCity2 = city.setValue.bind(city2)
setNameCity2("name", "Bor")
setNameCity2("country", "Russia")
console.log(city2);

// --------------------------------------------------Замыкание----------------------------------------------

// const cubeValue = (a) => {
//     // const a = 10;

//     return (b, c) => {
//         return a * b * c;
//     }
// }
// const first = cubeValue(10);
// const second = cubeValue(5)

// console.log(first(10, 10));
// console.log(second(5, 10));


// ----------------------------коррирование---------------------------------------------------------


const cubeValue2 = (a,b,c) => a*b*c;

console.log(cubeValue2(1,3,3));

const cubeCaryValue = (a) => {
    return (b) => {
        return (c) => {
            return a*b*c;
        }
    }
}

console.log(cubeCaryValue(1)(3)(3));

const twoArgs = cubeCaryValue(1)(3);

console.log(twoArgs(3));
console.log(twoArgs(4));
console.log(twoArgs(5));