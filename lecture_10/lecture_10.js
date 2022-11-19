

// ----------------------Прототипы---------------------------

// const arr = [1,2]

// console.log(arr);

// console.log(new String());


const russian = {
    country: "Russia",
    city: "NN"
}


const people = {
    name: "Alex",
    age: 26,
    city: "Moscow",
    __proto__: russian, // russian это прототип people
};


console.log(people.city, people.country);

// короткий синтаксис ключей для методов 

const userName= "Alex"

const userMy = {
  userName,
}

console.log(userMy);

//---------------------------------функции конструкторы--------------------------





function CreateUser (userName, userAge) {
    this.name = userName;
    this.age = userAge
    this.sayHi = function () {
        console.log(`Privet, my name ${this.name}`);
    }
}

CreateUser.prototype.sayAge = function () {
    console.log(`My age is ${this.age}`);
}

const firstUser = new CreateUser("Alex", 25)
const secondUser = new CreateUser("Ivan", 20)

console.log(firstUser);
console.log(secondUser);

secondUser.sayHi()
firstUser.sayAge()

// Реализовать функцию конструктор для создания открыток. Функция должна создавать объект открытки со свойствами from, to и метод show(). Метод должен возвращать строку в которой будут указаны значения свойств  from и to. Добавить в prototype создаваемого объекта метод заменяющий текущее значение  свойства from на новое переданное значение.

function CreateCard (from, to) {
    this.from= from;
    this.to=to;
    this.show = function () {
        console.log(`Открытка из ${this.from}  в ${this.to}`);
    }
}

CreateCard.prototype.setFrom = function (newFrom){
    this.from = newFrom
}

const card1 = new CreateCard ("Moscow", "NN");
const card2 = new CreateCard("Tver", "Bor")

console.log(card1);
console.log(card2);
card1.show()
card2.show()

card1.setFrom("Norilsk")
card1.show()


//------------------------Классы--------------------------
// некая надстройка над функциями конструкторами

class People {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }
    getFullName (){
        return `${this.name} ${this.surname}`
    }
}

const firstPeople = new People ("Alex", "Ivanov")
console.log(firstPeople.getFullName());
console.log(firstPeople);


class Worker extends People {
    constructor (name, surname, rate, day) {
        super (name, surname);
        this.day =day;
        this.rate = rate
    }
    getSallary () {
        return `${this.getFullName()} получил ${this.rate * this.day}`;
    }
}

const firstWorker = new Worker ("Alex", "Petrov", 500, 20);
const secondWorker = new Worker ("Ivan", "Popov", 700, 20)

console.log(firstWorker.getFullName());
console.log(firstWorker.getSallary());
