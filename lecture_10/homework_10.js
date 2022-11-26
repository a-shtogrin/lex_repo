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
    return this.string.split("").reverse().join("");
  }
  ucFirst() {
    return this.string[0].toUpperCase() + this.string.slice(1);
  }
  ucWords() {
    let newString = "";
    for (let i = 0; i < this.string.length; i++) {
      if (
        (this.string[i] !== " " && this.string[i - 1] === " ") ||
        (i === 0 && this.string[i] !== " ")
      ) {
        newString += this.string[i].toUpperCase();
      } else {
        newString += this.string[i];
      }
    }
    return newString;
  }
}

const myObj = new MyString("  privet lex ha ha   ");
console.log(myObj);
console.log(myObj.reverse());
console.log(myObj.ucFirst());
console.log(myObj.ucWords());

/* Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона. */

class Validator {
  constructor (string) {
    this.string = string;
  }
  isEmail() {
    const newString = this.string.trim()
    if (newString.includes("@") && newString.indexOf("@") !== 0) {
      if (newString.includes(".") && (newString.indexOf(".") === (newString.length - 3) || newString.indexOf(".") === (newString.length - 4) )) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  
  }
}

const checkString = new Validator("   3@gg.ru  ")
console.log(checkString);
console.log(checkString.isEmail());