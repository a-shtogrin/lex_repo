
// -------------- Функции--------------------------

//Определение функции
function showMessage(message) {
    console.log(message);
}

//вывод функции
showMessage("jasdhfsj")
showMessage("фыфым")
showMessage("уууууj")

function sum(a, b=2) {
    return(a + b);
}
// b=2 - параметр по умолчанию, используется еcли мы не определили параметр b, всегда пишется в конце.
/* const result = sum (1, 5)
console.log(result);

function positiveSum(a,b) {
    if (a>0 && b>0) {
        return a + b;
    } 
    return (console.log("НЕТ"));
}

console.log(positiveSum(4, 1)); */

// function getName() {
//     const userName = "Ivan"
//     return userName
// }

// console.log(getName());

/* let name ="Alex";
function sayHi(message = "hello") {
    name = "Ivan"
    console.log(`${message} - ${name}`);
}
console.log(name);
 sayHi()
 console.log(name);

 function sum(a, b) {
    const result3 = a+b
    a +=1
    console.log(result3);
 } */
/* 
 sum(2,2) */

function sayHello(name = "Гость") {
    return console.log(`Hello - ${name}`)
}
sayHello("hfhfhf")

function exponentiation(number, degree = 1 ) {
    return console.log( number ** degree);
}

exponentiation(2, 3)

const arr = [1, 2, 4, 5, 6]
function getAverage(arr) {
    sum = 0;
    for (let i=0; i < arr.length; i+=1) {
        sum = sum + arr[i]
    }
    return console.log(sum/arr.length);
}

getAverage(arr)