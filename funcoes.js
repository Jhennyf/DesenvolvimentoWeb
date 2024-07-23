
function greeting(name){
    console.log('HI' + name)
}

greeting('jhenny')

function sum(num1, num2){
    return num1 + num2
}

function changeColor(){
    let titleH1 = document.getElementById('changeh1')
    titleH1.style.color = 'red'
}


//Objeto é um grupo de funcoes

function changeBackgroundColor(){
    let colors = ['red', 'pink', 'blue', 'yellow', 'orange']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
}