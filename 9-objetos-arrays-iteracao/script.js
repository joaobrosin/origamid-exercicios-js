// forEach ==============================
// retorna undefined

const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach((itemRef, indexRef, arrayRef) => {
//     arrayRef[indexRef] = 'apagado'
//     console.log(itemRef, indexRef, arrayRef)
// })

// carros.forEach((itemRef, indexRef, arrayRef) => {
//     console.log(itemRef.toUpperCase(), indexRef, arrayRef)
// })

// carros.forEach((itemRef, indexRef, arrayRef) => {
//     arrayRef[indexRef] = arrayRef[indexRef].toUpperCase()

//     console.log(itemRef, indexRef, arrayRef)
// })

// console.log(carros)

// map ==============================
// retorna uma array

const carros2 = ['Fusca', 'Gol', 'Uno']

// const variavelCarros2 = carros2.map((item, index, array) => {
//     console.log(item.toUpperCase(), index, array)

//     return item.toUpperCase()
// })

// console.log(carros2)
// console.log(variavelCarros2)

// ==================================

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

// const tempoAulas = aulas.map(aula => {
//     return aula.min
// })

// console.log(tempoAulas)

// function nomeAulas (aula) {
//     return aula.nome
// }

// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas)

// ==========================
// reduce para somar os valores de uma array

const disciplinas = [10, 25, 30];

// const reduceDisciplinas = disciplinas.reduce((acumulador, item, index, array) => {
//     return acumulador + item
// }, 0)

// console.log(disciplinas)
// console.log(`A soma de todos os items da array disciplinas é: ${reduceDisciplinas}`)

// ==========================
// reduce para retornar o maior valor da array

const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((itemAnterior, itemAtual) => {
//     if(itemAnterior > itemAtual) {
//         return itemAnterior
//     } else {
//         return itemAtual
//     }
// }, 0)

// console.log(maiorNumero)

// =========================
// reduce para retornar um objeto, ou array,
// só com os  nomes das aulas do objeto inicial (aulas)
// tbm pode retornar array e outros dados, como os minutos

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//     console.log(acumulador, aula, index)
//     acumulador[index] = aula.nome;
//     return acumulador;
// }, {});

// reduceRight faz a mesma  coisa que o reduce
// mas lendo a array ou objeto do fim para  o inicio

// ==========================
// some. para verificar se há um item na  lista

const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((fruta) => {
//     return fruta == 'Uva';
// })

// console.log(temUva) // true

// =========================
// every para retornar valor de cada um dos itens (true ou false)
// quando o item da string está vazio ou o valor for zero, o boolean é false

const frutas2 = ['Maçã', 'Tomate', '' , 'Limão']

// const tudoPreenchido = frutas2.every((fruta) => {
//     console.log(fruta)
//     return fruta
// })

// console.log(tudoPreenchido) // false

// ========================
// every para verificar algo em toda array
// exemplo, todos valores  maiores que 3

const valores = [6, 43, 22, 88, 101, 29];

// const maiorQue3 = valores.every((valor) => {
//     return valor > 3
// })

// console.log(maiorQue3) // true

// ===========================
// [].find() - retorna o valor atual da primeira iteração que retornar um valor truthy.
// [].findIndex() - ao invés de retornar o valor, retorna o indexdeste valor na array

const frutas3 = ['Banana', 'Pêra', 'Uva'];

// const indexUva = frutas.findIndex((item) => {
//     return item == 'Uva'
// })

// console.log(indexUva) // 2

// ======================
// [].filter() - retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy

const frutas4 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

// const arrayLimpa = frutas4.filter((fruta) => {
//     return fruta
// })

// console.log(arrayLimpa)

// ======================
// [].filter() - para retornar mais de um valor

const numeros2 = [6, 43, 22, 88, 101, 29, 46]

// const buscaMaior45 = numeros2.filter(item => item > 45)

// console.log(buscaMaior45)

// IR PARA EXERCÍCIOS