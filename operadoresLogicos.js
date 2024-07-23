let idade = prompt('Digite sua idade: ')
let titulo = prompt('Voce tem titulo? (sim/nao)')
let id = 18

if(idade >= id && titulo == 'sim'){
    console.log('Voce pode votar')
}
else if(idade >= id && titulo == 'nao'){
    console.log('precisa de titulo')
}
else if(idade < id && titulo == 'nao'){
    console.log('nao pode votar')
}