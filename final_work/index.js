
// создание header

const headerMy = document.createElement('header')
document.body.prepend (headerMy)
headerMy.className = "header";

headerMy.innerHTML = "<h3>Что надо сделать</h3>"; 

console.log(headerMy);

const container = document.createElement('div')
document.body.append (container)
container.className = 'container'