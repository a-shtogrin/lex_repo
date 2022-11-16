// 1. Что выведет функция?
// function f() {
//     console.log(this);
//    }

//    let user = {
//     g: f.bind(null),
//    };

//    user.g();

//    2. Можем ли мы изменить this дополнительным связыванием?

console.log("2.");

function f() {
  console.log(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });  // не понятно второе привязывание

f();

//    3. В свойство функции записано значение. Изменится ли оно после применения bind?
console.log("3.");

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;  // не понятно это действие

console.log(sayHi);

let bound = sayHi.bind({
  name: "Вася",
});
bound()
console.log(bound.test);




