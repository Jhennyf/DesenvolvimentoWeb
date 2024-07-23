
let grade = prompt('Digite o nome do aluno')

if (grade > 100){
    alert('Nota invalida')
} 
else if(grade >= 90){
    console.log('Nota A')
}
else if(grade >= 80){
    console.log('Nota B')
}
else if(grade >= 70){
    console.log('Nota C')
}
else if(grade >= 60){
    console.log('Nota D')
}
else{
    console.log('nota F')
}

