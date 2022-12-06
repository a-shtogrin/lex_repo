

import {createHeader, createFooter, createDiv, createTextInput, createButton} from './function.js'


document.body.append(createDiv("wrap", "wrap"));  //создание родительского объекта хедера и контента, чтобы футер был всегда внизу

const [wrap] = document.getElementsByClassName("wrap");  // это деструктуризация массива. с помощью getElementsByClassName("wrap") возвращается массив элементов с классом wrap (вернет массив только с одним элементом)
console.log(wrap);

wrap.prepend(createHeader("Список дел")); //создание хедера
wrap.append(createDiv("container", "wrap-container"));  // создание контейнера
document.body.append(createFooter("Сделал дело, гуляй смело!")); //создание футера

const container = document.getElementsByClassName("wrap-container")[0]; //можно присвоить id контейнеру и использовать getElementById или выполнить деструктуризацию как с wrap

container.append(createDiv("addWork", "wrap-container-add")); //создание родительского объекта для поля ввода и кнопки


const addWork = document.getElementById("addWork");

addWork.append(createTextInput("input_field", 30, "Новая задача")); //создание поля ввода

addWork.append(createButton("add_button", "btn", "Добавить задачу")); //создание кнопки

const list = document.createElement(`ul`); //создание списка
list.className = `list`;
list.textContent = `Список:`;
container.append(list);

//  функция создание элемента списка

const addLi = (task) => {
  const newTask = document.createElement("div");
  newTask.className = "new_task";
  const chbox = document.createElement("input");
  chbox.type = "checkbox";
  const newListItem = document.createElement("li");
  newListItem.className = "list_item";
  newListItem.textContent += `${task}`;
  list.append(newTask);
  newTask.append(chbox);
  newTask.append(newListItem);
};



const addButton = document.getElementById("add_button");
const inputField = document.getElementById("input_field")


//обработчик
addButton.addEventListener("click", () => {
    if (inputField.value === ""){
        alert("Введи задачу!!")
    } else {
        addLi(inputField.value)
    }
    inputField.value = ""
});




