// Императивный подход - значит говорим программе что нужно делать.Императивный
// Декларативный метод - использоваие методов (готовых функций)

const names = [{name: "Alex"}, {name: "Ivan"}, {name: "Tony"}];

const findElem = names.find((el)=> el.name === "Tony");
console.log(findElem);


const filterArr = names.filter((el, i) => el.name ==="Tony" || el.name === "Alex" && i !== 0)
console.log(filterArr);

let arr = [1, 2, 3, 4];
let mapArr = arr.map((e) => e*10); //Возвращает новый массив!!!!
console.log(mapArr);

const mapArrName = names.map((el) => ({name: el.name, handCount: 2}))
console.log(mapArrName);

console.log(names);
const arrEach = names.forEach ((el) => (el.name = "Unknown")) //Заменяет существующий массив!!!!  возвращает - underfied
console.log(arrEach);
console.log(names);



/* Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, и в качестве результата работы функции возвращать сумму четных положительных элементов переданного массива.
 */


// const positiveEvenSum = (arr) => {
// const result = arr.reduce ((prev, cur) => {
//     if (cur > 0 && cur % 2 === 0) {
//         return prev + cur;
//     }
//     return prev;
// }, 0)
// return result}
// console.log(positiveEvenSum([1, 2, 3, 4 ,-4 -5]));


//  Второй способ:
const positiveEvenSum = (arr) => 
arr.filter((el) => el >0 && el % 2 === 0).reduce((prev, cur) => prev + cur);
console.log(positiveEvenSum([1, 2, 3, 4 ,-4 -5]));


/* Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного. */


// Императивный вариант решения:
// function uniqArrayItem (itemArr) {
//     const result = [];

//     for (let i = 0; i < itemArr.length; i++) {
//         if(!result.includes(itemArr[i]))
//         result.push(itemArr[i]);
//     }
//     return result;
// }
// const uniqResult = uniqArrayItem([1,2,3,4,4,4,4,5,5,6,6,7])
// console.log(uniqResult);

// Декларативный тип решения:

function uniqArrayItem (arr) {
    return arr.filter((el, i, array) => !array.includes(el, i+1))
}
const uniqResult = uniqArrayItem([1,2,3,4,4,4,4,5,5,6,6,7])
console.log(uniqResult);



/* Написать функцию  которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false. */