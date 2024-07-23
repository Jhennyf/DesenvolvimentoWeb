

let randomNumber = Math.floor(Math.random() * 100) 
let tries = 0
console.log(randomNumber)

function checkGuess(){
    let guess = document.getElementById('guess').value 
    let message = document.getElementById('message')
    tries++

    if(guess == randomNumber){
        message.innerHTML = 'Parabéns!! acertou o number! numero de tentativas ' + tries + ' tries!'
    }
    else if(guess < randomNumber){
        message.innerHTML = 'Muito baixo. Lamento!'
    }
    else if(guess > randomNumber){
        message.innerHTML = 'Muito alto. Lamento'
    }
}