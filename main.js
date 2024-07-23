//lista em js

let numberlist = document.getElementById('numberlist')


for(i = 1; i <= 4; i++){
    let listItem = document.createElement('li')
    listItem.textContent = prompt('Lista de Frutas: ' + i)
    numberlist.appendChild(listItem)
}