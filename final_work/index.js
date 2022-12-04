// Создание To Do List, необходимо средствами JS создать страницу на которой будут элементы:
// header содержащий заголовок страницы
// контейнер с контентом страницы
// поле ввода input
// список элементов (число элементов > 1)
// кнопка добавления To Do

// Используя наработки первого задания, добавить возможность добавления To Do в список с помощью поля ввода input и кнопки создания нового To Do.




// создание header

const createHeader = (name) => {
  const header = document.createElement("header");
  header.className = `header`;
  header.innerHTML = `<h3>${name}<h3>`;
  document.body.prepend(header);
};

// создание footer

const createFooter = (name) => {
  const footer = document.createElement("footer");
  footer.className = `header`;
  footer.innerHTML = `<h3>${name}<h3>`;
  document.body.append(footer);
};


createHeader("Список задач");

//------------------создание  контейнера
const container = document.createElement("div");
document.body.append(container);
container.className = "container";

createFooter("Сделал дело, гуляй смело!");

//------------------создание родительского объекта для поля ввода и кнопки

// const createObj = (objName, id, parentObj) => {
//   const obj = document.createElement(`${objName}`);
//   obj.id = `${id}`;
//   console.log(obj);
//   parentObj.append(obj)
// };
// // createObj('div', 'container', 'body')
// createObj('div', 'addWork', "container")

const addWork = document.createElement("div");
addWork.className = "addWork";
container.append(addWork);

//----------------- добавление поля ввода и кнопки в родительский объект

// addWork.innerHTML +='<input type="text" size="30" maxlength="15" placeholder="Введи дело" />'

const createTextInput = (id, size, placeholder) => {
  const inputField = document.createElement("input");
  inputField.id = `${id}`
  inputField.type = "text";
  inputField.size = `${size}`;
  inputField.placeholder = `${placeholder}`;
  return inputField;
};

addWork.append(createTextInput("inputField", 30, "Новая задача"));

// -----------добавление кнопки
const createButton = (id, className, textContent) => {
  const addButton = document.createElement("button");
  addButton.id = `${id}`;
  addButton.className = `${className}`;
  addButton.textContent = `${textContent}`;
  return addButton;
};

addWork.append(createButton("add_button", "btn", "Добавить задачу"));


//создание списка и добаление его в контейнер
// const createList=(type, className, textContent) => {
// const newList = document.createElement(`${type}`);
// newList.className = `${className}`;
// newList.textContent = `${textContent}`
// container.append(newList)
// }
// createList("ul", "list", "Список:");
const list = document.createElement(`ul`);
list.className = `list`;
list.textContent = `Список:`;
container.append(list);

// // создание элемента списка

const addLi = (task) => {
  const newTask = document.createElement("div");
  newTask.className = "newTask";
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
const inputField = document.getElementById("inputField")
const chbox = document.getElementById('qwer')


addButton.addEventListener("click", () => {
    if (inputField.value === ""){
        alert("Введи задачу!!")
    } else {
        addLi(inputField.value)
    }
});




