// const comida = 'Pizza'
// const agua = new String('Água') 

// console.log(agua.length)

// const frase = 'A melhor comida'

// console.log(frase[frase.length - 1])

// console.log(frase.charAt(frase.length - 1))

// const palavra = 'Concatenando palavras em '
// const linguagem = 'JavaScript' 

// const fraseFinal = palavra.concat(linguagem, '. Que Demais', '!!')

// console.log(fraseFinal)

//===============================

// const fruta = 'banana'
// const listaFrutas = 'melancia, banana, laranja'

// console.log(listaFrutas.includes(fruta, 10))

// console.log(fruta.startsWith('a'))

// ====================

// const transacao1 = 'deposito de cliente'
// const transacao2 = 'deposito de fornecedor'
// const transacao3 = 'taxa de camisas'

// console.log(transacao1.slice(0, 3))
// console.log(transacao1.slice(0, -2))
// console.log(transacao1.slice(-7))

// console.log(transacao2.slice(0, 3))
// console.log(transacao3.slice(0, 3))

// ===========================

// const fruta = 'banana'

// console.log(fruta.indexOf('a'))
// console.log(fruta.lastIndexOf('a'))

// ===============================

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 1000']

// listaPrecos.forEach((item) => {
//     console.log(item.padStart(10, '.'))
    
// })

// listaPrecos.forEach((item) => {
//     console.log(item.padEnd(10, '.'))
    
// })


// ================================

// const fruta = 'banana' 

// console.log(fruta.repeat(2))

// =========================================

// let listaItens = 'camisas bonés calças bermudas vestidos'

// listaItens = listaItens.replace(/[ ]+/g, ', ')

// console.log(listaItens)

// let preco = 'R$ 1200,43'

// preco = preco.replace(',', '.')

// console.log(preco)


// ==================================

// let listaItens = 'camisas bonés calças bermudas vestidos saias'

// let arrayItens = listaItens.split(' ')

// console.log(arrayItens)

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'

// console.log(htmlText)

// const htmlTextArray = htmlText.split('div')

// console.log(htmlTextArray)


// const frutasArray = ['Banana', 'Melancia', 'Laranja']

// console.log(frutasArray.join(', '))

// const novoHtml = htmlTextArray.join('section')

// console.log(novoHtml)

// ========================================

// const sexo1 = 'Feminino'
// const sexo2 = 'feminino'
// const sexo3 = 'FEMININO'

// console.log(sexo1 == 'feminino')
// console.log(sexo2 == 'feminino')
// console.log(sexo3 == 'feminino')

// console.log(sexo1.toLowerCase() == 'feminino')
// console.log(sexo2.toLowerCase() == 'feminino')
// console.log(sexo3.toLowerCase() == 'feminino')

//  ==========================================

// const valor = '   R$  23.00   '

// console.log(valor.trim())  // remove espaços do começo e final
// console.log(valor.trimStart())  // remove espaços do comeco da string
// console.log(valor.trimEnd()) // remove espaços do final da string


// = EXERCICIOS =================================

// utilizando o foreach na array abaixo,
// some os valores de taxa e os valores de recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39'
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99'
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de Clientes',
        valor: 'R$ 49'
    },
]



function somaTaxaOuRecebimento (objectName) {

    let taxaTotal = 0
    let recebimentoTotal = 0

    objectName.forEach((item) => {   
        if (item.descricao.toLowerCase().trim().startsWith('taxa')) {
            taxaTotal += Number(item.valor.replace('R$ ', ''))
        } else if (item.descricao.toLowerCase().trim().startsWith('rece')) {
            recebimentoTotal += Number(item.valor.replace('R$ ', ''))
        }
    })

    console.log(`Taxa total:  R$ ${taxaTotal}`)
    console.log(`Rendimento total: R$ ${recebimentoTotal}`)
}

somaTaxaOuRecebimento(transacoes)




// retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Biclicleta'

console.log(transportes.split(';'))


// substitua todos os spans por a

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Sobre</span></li>
                <li><span>Sobre</span></li>
            </ul>`

const htmlArray = html.split('span')
const htmlArrayA = htmlArray.join('a')

console.log(htmlArrayA)


// retorne o último caracter da frase

const frase = 'Melhor do ano!'

console.log(frase.charAt(frase.length - 1))

console.log(frase[frase.length - 1])

console.log(frase.slice(-1))

// retorne o total de taxas 

const transacoes2 = ['Taxa do Banco',
                    '   TAXA DO PÃO',
                    '   taxa do mercado',
                    'depósito Bancário',
                    'TARIFA especial' 
]

function totalTaxas (arrayName) {
    let totTaxas = 0

    arrayName.forEach((item) => {
        item = item.toLowerCase()
        item = item.trim()
        item = item.slice(0,4)

        if (item === ('taxa')) { // mesma coisa que item.toLowerCase().includes('taxa')
            totTaxas ++
        }
    })

    console.log(totTaxas)
}

totalTaxas(transacoes2)