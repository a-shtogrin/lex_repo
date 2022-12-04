

/* ------------------Функции для ToDo------------
 */

// создание header

const createHeader = (title) => {
    const header = document.createElement("header");
    header.className = `header`;
    header.innerHTML = `<h3>${title}<h3>`;
    return header;
  };
  
  
  // создание footer
  
  const createFooter = (name) => {
    const footer = document.createElement("footer");
    footer.className = `footer`;
    footer.innerHTML = `<h3>${name}<h3>`;
    return footer;
  };
  
  
  //------------------создание объекта с классом
  const createDiv = (className) => {
    const div = document.createElement("div");
    div.className = `${className}`;
    return div;
  }
  

  // //----------------- добавление поля ввода, тип text
  
  const createTextInput = (id, size, placeholder) => {
    const inputField = document.createElement("input");
    inputField.id = `${id}`
    inputField.type = "text";
    inputField.size = `${size}`;
    inputField.placeholder = `${placeholder}`;
    return inputField;
  };
  
  // -----------добавление кнопки
  const createButton = (id, className, textContent) => {
    const addButton = document.createElement("button");
    addButton.id = `${id}`;
    addButton.className = `${className}`;
    addButton.textContent = `${textContent}`;
    return addButton;
  };

  export {createHeader, createFooter, createDiv, createTextInput, createButton}
