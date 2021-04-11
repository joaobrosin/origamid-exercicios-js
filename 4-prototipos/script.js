// function Pessoa(nome, idade) {
//     this.nome = nome
//     this.idade = idade

// }

// const andre = new Pessoa('André', 28)

// Pessoa.prototype.andar = function () {
//     return this.nome + ' andou'
// }

// Pessoa.prototype.nadar = function () {
//     return this.nome + ' nadou'
// }

// ===================================================

// const pais = 'Brasil'
// const cidade = new String('Rio')

// console.log(pais.charAt(0))
// console.log(cidade.charAt(2))

//  ===================================================

// const listaAnimais = ['cachorro', 'gato', 'boi', 'cavalo']


// const lista = document.querySelectorAll('li')

// console.log(lista)

// const listaArray = Array.prototype.slice.call(lista)

// console.log(listaArray)


// trasformando em array 

// const listaArray1 = Array.prototype.slice.call(lista)
// const listaArray2 = Array.from(lista)


// ======================================================

// exercícios

// criar uma funcao construtora de pessoas
// deve conter nome, sobrenome e idade
// crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa (nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

const joao = new Pessoa ('joão', 'brosin', 27)

// liste os métodos acessados por
//dados criados com Nodelist,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)


// Liste os construtores dos dados abaixo

const li = document.querySelector('li')

li // HTMLLIElement
li.click // Function
li.innerText // String
li.value // Number
li.hidden // Boolean
li.offsetLeft // Number
li.click() // undefined


// Qual o construtor do dado abaixo

li.hidden.constructor.name

// resposta

li.hidden.constructor.name.constructor.name // String

