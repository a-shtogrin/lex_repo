/* 1) Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */

const stringToArray = (string) => {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
};
console.log("1)");
console.log( stringToArray("Привет! Я робот."));

/* 2) Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов. */

const deleteСharacters = (str, length) => {
  return str.substr(0, length);
};

console.log("2)"+ deleteСharacters("012345", 3));

/* 3) Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр. */

const insertDash = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toUpperCase() + "-";
    }
  }
  return newStr;
};
console.log("3)"+insertDash("Привет"));

/* 4) Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний. */

const getFistCharacter = (string) => {
  return string[0].toUpperCase();
};
console.log("4)" + getFistCharacter("rivet"));

/* 5) Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы. */

const capitalize = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr += str[i].toUpperCase();
    }
    if (i === str.length - 1) {
      newStr += str[i];
    } else {
      if (str[i - 1] === " ") {
        newStr += str[i].toUpperCase();
        continue;
      } else {
        newStr += str[i];
      }
    }
  }
  return newStr;
};
console.log("5)"+ capitalize("    привет рома ку кушкин  "));

/* 6) Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
 */

const changeRegister = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
};
console.log("6)"+ changeRegister("КаЖдЫй ОхОтНиК"));

/* 7) Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
 */

const removeChar = (str) => {
  const numbers = "1234567890";
  const letters = "qwertyuiopasdfghjkLzxcvbnm";
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (str[i].toLowerCase() === numbers[j].toLocaleLowerCase()) {
        newStr += str[i];
      }
    }
    for (let p = 0; p < letters.length; p++) {
      if (str[i].toLowerCase() === letters[p].toLocaleLowerCase()) {
        newStr += str[i];
      }
    }
  }
  return newStr;
};
console.log("7)"+ removeChar("asdfs sadfHHGHJFGHGCasdf /@#$$%%^^&&()  1244567"));


/* 8) Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.
 */
