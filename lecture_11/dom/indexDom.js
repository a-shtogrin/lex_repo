const addButton = document.getElementById("add_button")

addButton.textContent = "Создать новый элемент"

console.log(addButton);

const buttonsCol = document.getElementsByTagName("button")
console.log(buttonsCol);
console.log(buttonsCol[0]);

// const listItem = document.querySelector("li + .active")
// const listItems = document.querySelectorAll(".list_item")
//  console.log(listItem, listItems);

//  // комбинаторный селектор https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Selectors/Combinators

//  const header = document.querySelector("header")
//  header.innerHTML = "<h3>New Title</h3>"
//  console.log(header.innerHTML);

//  const footer = document.querySelector("footer")
//  footer.outerHTML = "<div><h3>HELLO FOOTER</h3></div>"
//  console.log(footer);

// const addButton = document.getElementById("add_button")

// addButton.style.color = "red"
// addButton.style.width = "400px"

// const list = document.querySelector("ul")

// list.classList.add("active")

// console.log(list.classList);

// новый элемент в списке

// const newListItem = document.createElement("li")

// newListItem.className = "list_item"
// newListItem.textContent = "New Element"

// console.log(newListItem);

// const list = document.querySelector("ul")
// list.append(newListItem)

// const themBtn = document.getElementById("them_button");

// const first = function () {
//   console.log("Hello");
// };

// const second = function () {
//   console.log("By");
// };

// themBtn.onclick = function () {
//    first();
//    second();
// }

// const themeBtn = document.getElementById("theme_button");

// const themeToggle = function(event) {
//     console.log(event);  //event - объект события, в нем много свойств.
//     const body = document.body;

//     body.classList.toggle("light_theme");
//     if (body.classList.contains("light_theme")) {
//         this.textContent = "Темная тема"  //themeBt
//     } else {
//         this.textContent = "Светлая тема" //themeBt
//     }
    
// }
// themeBtn.addEventListener("click", themeToggle);

// const content = document.querySelector(".content");

// content.addEventListener("click", (even) =>
//   console.log(even.target, even.currentTarget)
// );

// const list = document.querySelector(".list");

// list.addEventListener("click", () => console.log("list"));

// const listItems = document.querySelectorAll(".list_item");

// for (let item of listItems) {
//   item.addEventListener("click", listItems);
// }