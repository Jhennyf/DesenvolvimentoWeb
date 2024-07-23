let valorConta = 0
let gorjeta = 0
let valorTotal = 0

valorConta =  prompt('Digite o valor da conta: ')
gorjeta = prompt('digite a gorgete (decimal)%: ')

gorjeta = (valorConta * gorjeta) / 100
valorTotal = valorConta + gorjeta

console.log('O valor toral com gorgeta é de R$ ' + valorTotal + ' Reais')