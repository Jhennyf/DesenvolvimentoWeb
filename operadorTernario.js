let checkButton = document.getElementById('check-button')
let ageInput = document.getElementById('age-input')

checkButton.addEventListener('click', function(){
    let age = ageInput.value
    let message = (age >= 18) ? 'You are é and adult' : ' you are not adult'
    alert(message)
    ageInput.value = ''
})