// 1. Что выведет функция?
// function f() {
//     console.log(this);
//    }

//    let user = {
//     g: f.bind(null),
//    };

//    user.g();

//    2. Можем ли мы изменить this дополнительным связыванием? Ответ: НЕТ, может быть только одно связывание

// console.log("2.");

// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });  // не понятно второе привязывание

// f();

// //    3. В свойство функции записано значение. Изменится ли оно после применения bind?
// console.log("3.");

// function sayHi() {
//   console.log(this.name);
// }
// sayHi.test = 5;  // функция тоже объект, тоесть добавляется свойство test

// console.log(sayHi);

// let bound = sayHi.bind({
//   name: "Вася",
// });
// bound()
// console.log(bound.test);

// 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа. Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
//  }
 
//  let user = {
//   name: 'Вася',
 
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
 
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
 
//  };
 
//  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));  // добавили bind(user)


// 5. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?


// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
//  }
 
//  let user = {
//   name: 'John',
 
//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
//  };
 
//  askPassword(user.login.bind(user, true), user.login.bind(user, false));
 

//  6. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.

const elem = {value: "Привет"}

function func(surname, name) {
alert (`${this.value}, ${surname}, ${name}`);
}

const sayHi = func.bind(elem)
//Тут напишите конструкцию с bind()

func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'


// короткий синтаксис ключей для методов 

const userEx = "Alex"

const userMy = {
  userEx,
}

console.log(userEx);