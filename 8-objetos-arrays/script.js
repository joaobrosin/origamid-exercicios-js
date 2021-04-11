const dados = [new String('Tipo 1'), ['carro', 'portas', {cor: 'azul', preco: 2000}], function andar(nome) {console.log(nome)}]

// console.log(dados[0])
// console.log(dados[1])
// console.log(dados[1][0])
// console.log(dados[1][2])
// console.log(dados[1][2].cor)
// console.log(dados[2]('oi'))


// const li = document.querySelectorAll('li')
// console.log(li) // retorna node list

// const arrayLi = Array.from(li)
// console.log(arrayLi) // retorna array

// como um objeto (node list por exemplo)
// parece com array, mas não é?

const obj = {
    0: 'João',
    1: 'José',
    2: 'Maria',
    3: 'Juliana',
    length: 4
}

const objArray = Array.from(obj)

// console.log(objArray)


// verificar se é array

// console.log(Array.isArray(li)) // false
// console.log(Array.isArray(arrayLi)) // true

// criar array

// console.log(Array.of('teste1','teste2','teste3'))
// console.log(Array.of(1, 2, 3))
// console.log(Array.of(3))
// console.log(Array(3, 2, 1))
// console.log(Array(3))

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]

frutas.length // 3

frutas[0].length // 6

frutas[2][0] // uva roxa

frutas[2][0].length // 8


// ===========================

const instrumentos = ['guitara', 'baixo', 'violão']

instrumentos.sort() // organiza a array em ordem alfabetica

const idades = [32, 21, 33, 43, 1, 12, 8]

// idades.sort() // não coloca números na ordem!! coloca apenas os caracteres na ordem - 12 vem antes de 2 por exemplo, por causa do primeiro caractere


// ===============================

const carros = ['Ford', 'Fiat', 'Kia']

carros.unshift('ferrari', 'gol') // adiciona novos itens ao começo da array e retorna o length

carros.push('tesla') // adiciona novos itens ao final da array

// ===============================

// console.log(carros)

// console.log(carros.pop()) // retira e retorna o ultimo item da array

// console.log(carros)

// console.log(carros.shift()) // retira e retorna o primeiro item da array

// console.log(carros)


// console.log(carros.reverse()) // modifica a array para a ordem contrária


//  ==================================

// [].splice(index, remover, item1, item2, ...)

// const carros3 = ['ford', 'fiat', 'VW', 'honda']

// console.log(carros3.splice(1, 0, 'kia', 'mustang')) // [] - array vazia (nenhum item removido)
// console.log(carros3) // item adicionado a partir do index 1, sem remover nenhum item

// console.log(carros3.splice(3, 1, 'Ferrari')) // ["fiat"] - item removido
// console.log(carros3) // itens adicionados no index 3, removendo o item que estava no index 3

// console.log(carros3.splice(1, 2, 'Fusca')) // ["kia", "mustang"] - itens removidos
// console.log(carros3) // item adicionado no index 1, removendo 2 itens (do index 1 e 2)


// ======================================

// [].copyWithin(alvo, inicio, final)

// console.log(['0banana', '1maçã', '2laranja', '3melão', '4mamão', '5tangerina'].copyWithin(2, 0, 2))
// ele troca os lugares dos itens da array, mas não entendi a lógica

// console.log(['0banana', '1maçã', '2laranja', '3melão', '4mamão', '5tangerina'].copyWithin(-1))

//  ====================================

// console.log(['0banana', '1maçã', '2laranja', '3melão', '4mamão', '5tangerina'].fill('coco')) //preenche com coco

// console.log(['0banana', '1maçã', '2laranja', '3melão', '4mamão', '5tangerina'].fill('coco', 1)) // preenche com coco a partir do index 1

// console.log(['0banana', '1maçã', '2laranja', '3melão', '4mamão', '5tangerina'].fill('coco', 1, 4)) //preenche com coco do index 1 ao 4

// ========================= métodos de acesso, não muda a array, só retorna ela modificada na hora

// const transporte1 = ['barco', 'avião']
// const transporte2 = ['carro', 'moto']

// const transportes = transporte1.concat(transporte2) // concatena as duas arrays

// console.log(transportes) 

// const maisTransportes = [].concat(transporte1, transporte2, 'Van')

// console.log(maisTransportes)


// =====================================

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js']

linguagens.includes('css') // true
linguagens.includes('ruby') // false

linguagens.indexOf('python') // 4

linguagens.indexOf('js') // 2 - começa a correr a array do inicio pro final
linguagens.lastIndexOf('js') // 5 - começa a correr a array do final para o inicio

linguagens.indexOf('ruby') // -1 - (não existe a palavra na array)


// =========================================

linguagens.join() // "html,css,js,php,python,js"

linguagens.join(' ') // "html css js php python js"

linguagens.join(', ') // "html, css, js, php, python, js"

//  ========================================

let htmlString = '<h2>Título Principal</h2>'

htmlString = htmlString.split('h2')
htmlString = htmlString.join('h1')

// console.log(htmlString)

// =========================================

let comidas = ['0lasanha', '1pizza', '2sushi', '3hamburguer', '4pierog']

// console.log(comidas.slice(1)) // retorna array a partir do index 1 em diante
// console.log(comidas.slice(2)) // retorna array a partir do index 2 em diante


// console.log(comidas.slice(0, 3)) // retorna array do item de index 0 até o de index 2
// console.log(comidas.slice(1, 3)) // retorna array do item de index 1 até o de index 2
// console.log(comidas.slice(1, 4)) // retorna array do item de index 1 até o de index 3


// =======================================

const food = ['0lasanha', '1pizza', '2sushi', '3hamburguer', '4pierog']

const foodClone = food.slice() // clona a outra array, se modificar a primeira não irá alterar o clone.

// console.log(foodClone) // retorna igual a array food

// food.pop() // modificou a array food (tirou ultimo item)

// console.log(food) // retorna a array food sem o ultimo item

// console.log(foodClone) // retorna a arrayClone, com todos os itens, inclusive o que foi retirado da array original


