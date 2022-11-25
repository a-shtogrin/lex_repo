/* Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника. */

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return `${this.name} ${this.surname} получает ${this.rate * this.days}`;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const firstWorker = new Worker("Alex", "Ivanov", 250, 21);

// console.log(firstWorker);
// console.log(firstWorker.getFullName());
// console.log(firstWorker.getSalary())

/* Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.
 */

// class Boss extends Worker {
//     constructor (name, surname, rate, days, workers) {
//         super (name, surname, rate, days);
//         super.getFullName();
//         this.workers = workers;
//     }
//     getSalary() {
//         return `Общая зарплата ${this.rate * this.days * this.workers}`
//     }
// }
// const forBoss = new Boss("Joe","Petrov", 250, 25, 10);

// console.log(forBoss);
// console.log(forBoss.getFullName());
// console.log(forBoss.getSalary())

/* Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте и методы-сеттеры и методы-геттеры для их чтения. */

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  get rate() {
    return `${this._rate} rate`;
  }
  get days() {
    return `${this._days} days`;
  }
  set rate(value) {
    this._rate = value;
  }
  set days(value) {
    this._days = value;
  }
  getSalary() {
    return `${this.name} ${this.surname} получает ${this._rate * this._days}`;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const firstWorker = new Worker("Alex", "Ivanov", 250, 21);

console.log(firstWorker);
console.log(firstWorker.getFullName());
console.log(firstWorker.getSalary());

/* Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
  constructor(string) {
    this.string = string;
  }

  reverse() {
    return this.string.split("").reverse().join("")
  }
  ucFirst() {
    const newStr = this.string.split("")[0];
    return newStr
  }
}

const myObj = new MyString ("privet lex ha ha")
console.log((myObj));
console.log((myObj.reverse()));
console.log((myObj.ucFirst()));