/* 1) Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */

const stringToArray = (string) => {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
};
console.log("1)");
console.log(stringToArray("Привет! Я робот."));

/* 2) Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов. */

const deleteСharacters = (str, length) => {
  return str.substr(0, length);
};

console.log("2)" + deleteСharacters("012345", 3));

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
console.log("3)" + insertDash("Привет"));

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
console.log("5)" + capitalize("    привет рома ку кушкин  "));

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
console.log("6)" + changeRegister("КаЖдЫй ОхОтНиК"));

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
console.log(
  "7)" + removeChar("asdfs sadfHHGHJFGHGCasdf /@#$$%%^^&&()  1244567")
);

/* 8) Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.
 */

/* 9) Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
 */

const comparison = (str1, str2) => {
  let newStr1 = str1.toLocaleLowerCase();
  let newStr2 = str2.toLocaleLowerCase();
  console.log(newStr1);
  console.log(newStr2);
  return newStr1 === newStr2;
};

console.log("9)", comparison("PrIvET", "privet"));

/* 10) Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов. */

const insensitiveSearch = (str1, str2) => {
  return str1.toLocaleLowerCase().includes(str2.toLocaleLowerCase());
};
console.log("10)", insensitiveSearch("PrIvEt", "iV"));

/* 11) Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы. */

const initCap = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    } else {
      if (str[i - 1] === " ") {
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
    }
  }
  return newStr[0].toLowerCase() + newStr.slice(1, newStr.length);
};
console.log("11)", initCap(" PRiVet LeX  how ARE you  "));

/* 12) Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
 */

const initSnake = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += "_" + str[i].toLowerCase();
    } else {
        newStr += str[i].toLowerCase();
      }
    }
    return newStr;
  }
  
console.log("12)", initSnake("privetLexHowAreYou"));

// 13) Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

const repeatStr = (str, n) => {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str;
  } 
    return newStr;
  }
console.log("13)", repeatStr("Privet!", 5));

// 14) Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу

const path = (pathname) => {
  for (let i = pathname.length-1; i >= 0; i-=1) {
    if (pathname[i] === "\\") {
      return pathname.slice(i+1 , pathname.length);
    } 
  }
  console.log(newPathname);
}
console.log("14)", path("D:\\Курсы\\JS\\lex_repo\\lecture_6"));

/* 15)Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.*/

let Strin = {};
const endsWith = function(str, str1) {
  return str.includes(str1, str.length - str1.length)
}
Strin.ends = endsWith;
console.log("15)",  Strin.ends("privetLexHowAreYou", "You"));

/* 16) Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos. */

const getSubstr = (str, char, pos) => {
  if (str.indexOf(char) > pos) {
    return str.slice(pos , str.length)
  } else {
    return str.slice(0 , pos)
  }
}
console.log("16)", getSubstr("1234567890", "0", 5));

/* 17) Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки. */

const insert = (str, substr, pos = 0) => {
  return (str.slice(0, pos) + substr + str.slice(pos, str.length))
}
console.log("17)", insert("1234567890", "abc", 5));