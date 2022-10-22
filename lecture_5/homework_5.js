/* 1) делайте функцию, которая возвращает квадрат числа. Число передается параметром.*/
/* function getSquare(a) {
  return console.log("1)", a ** 2);
}
getSquare(4); */

/* 2) Сделайте функцию, которая возвращает сумму двух чисел. */

/* const getSum = (b, c) => b + c;
console.log("2)", getSum(45, 90)); */

/* 4) Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */
const getDay = (day) => {
  if (day > 0 && day < 8) {
    switch (day) {
      case 1:
        return console.log("4) monday");
      case 2:
        return console.log("4) Tuesday");
      case 3:
        return console.log("4) Wednesday");
        case 4:
            return console.log("4) Thursday");
            case 5:
        return console.log("4) Fraiday");
        case 6:
        return console.log("4) Suttaday");
        case 7:
        return console.log("4) Sunday");
    }
  } else{
    return console.log("4) Erorrr");
  }
};

getDay(7);

/* 5) Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
 */

const getComparison = (a, b) => {
    if (a === b) {
        return console.log("5)", true);
    } else {
        return console.log("5)", false);
    }
};
getComparison(5, 2);

/* 8) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */

const isNumberInRange = (x) => {
    if (x>0 && x<10) {
        return true;
    } else {
        return false;
    }
};
console.log(isNumberInRange(2));

/* 9) Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи. */

const arr1 = [1, 2, 11, 10, 3, 0, 4];
const getArr = (d) => {
    let arr2 = [];
    for (let i = 0; i < d.length; i++) {
        if (isNumberInRange(d[i])===true) {
            arr2.push(d[i]);
        }
    }
    return console.log(arr2);
}

getArr(arr1)

/* 10) Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
 */

const getDigitsSum = (e) => {
    let sum = 0;
    let digString = String(e);
    for (let i = 0; i < digString.length; i++) {
        sum += + digString[i];
    }
    return sum;
}

console.log(getDigitsSum(999));

/* 11) Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
 */

const get13 = () => {
    const arr3 = []
    for (let i = 1; i <= 2020; i++){
        if (getDigitsSum(i)===13) {
           arr3.push(i);
        }
    }
    return arr3;
}
 /* console.log(get13()); */

/*  12) Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */

const isEven = g => {
    if (g%2 == 0) {
        return true;
    }
    return false;
}
console.log(isEven(5));

/* 13) Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
 */

const getEvenArry = (ryr) => {
    let arr4 = [];
    for (let i = 0; i < ryr.length; i++) {
        if (isEven(ryr[i]) === true) {
            arr4.push(ryr[i])
        };
        
    }
    return arr4;
}

console.log(getEvenArry([8, 6, 4, 7, 0]));

 /* 15.Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Можно решить через while */

const lessNine = num => {
    console.log(`Функция lessNine вызвана с параметром ${num}`);
    if (getDigitsSum(num)>9) {
        return lessNine(getDigitsSum(num))
    }
    return getDigitsSum(num)
}

console.log(lessNine(12345));