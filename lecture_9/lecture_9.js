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
