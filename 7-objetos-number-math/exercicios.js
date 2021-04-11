// retorne um número aleatório
// entre 1050 e 2000

let randomNum = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(randomNum)

// Retorne o maior numero da lista abaixo

const numeros = '4, 5, 20, 8, 9'

const numerosArray = numeros.split(', ')

console.log(Math.max(...numerosArray)) // 20 - maior numero
 
console.log(Math.min(...numerosArray)) // 4 - menor numero


// crie uma funcao para limpar os precos 
// e retornar os numeros com centavos arredondados
// depois retorne a soma total

const listaPrecos = [
    'R$ 59,99',
    '  R$ 100,222',
    'R$ 230  ',
    'r$ 200'
]

function limpaPreco (arrayName) {

    let precoTotal = 0

    arrayName.forEach((preco) => {
        preco = preco.toUpperCase()
        preco = preco.replace('R$', '')
        preco = preco.replace(',', '.')
        preco = preco.trim()
        preco = +preco
        preco = +preco.toFixed(2)

        precoTotal = precoTotal + preco
    })

    console.log(`R$ ${precoTotal}`)
}

limpaPreco(listaPrecos)
