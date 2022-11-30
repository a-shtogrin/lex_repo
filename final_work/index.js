
// создание header

const headerMy = document.createElement('header')
document.body.prepend (headerMy)
headerMy.className = "header";

headerMy.innerHTML = "<h3>Список дел</h3>"; 

console.log(headerMy);

//создание  контейнера
const container = document.createElement('div')
document.body.append (container)
container.className = 'container'

console.log(container)

//создание родительского объекта для поля ввода и кнопки
const addWork = document.createElement('div')
addWork.className = 'addWork'


container.append(addWork)

// добавление поля ввода и кнопки в родительский объект
addWork.innerHTML +='<input type="text" size="15" maxlength="15" placeholder="Дело" />'
addWork.innerHTML += `<input type="button" size="10" placeholder="Дело">`



//создание списка и добаление его в контейнер
const newList = document.createElement("ul")
newList.className = "list"
newList.textContent = "Список:"
container.append(newList)

// создание элемента списка
const newListItem = document.createElement("li")
newListItem.className = "list_item"
newListItem.textContent = "New Element"

console.log(newListItem);

// поиск списка и добаление элемента в список
const list = document.querySelector("ul")
list.append(newListItem)


