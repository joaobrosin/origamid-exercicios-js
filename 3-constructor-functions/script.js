// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor)
//     },
//     ativar() {
//         this.element().classList.add('ativo')
//     }
// }

// function Dom (seletorParam) {
//     this.element = document.querySelector(seletorParam)
//     this.element.classList.add('ativo') 
// }

// Dom('ul')

// function Dom (seletor) {

//     this.element = function () {
//         return document.querySelector(seletor)
//     }

//     this.ativar = function (classe) {
//         this.element().classList.add(classe)
//     }
// }

// const li = new Dom('li')
// const liLast = new Dom('li:last-child')
// const ul = new Dom('ul')

// liLast.ativar('ativo')



// exercicios ==============================================

// function Pessoa (nomePessoa, idadePessoa) {
//     this.nome = nomePessoa
//     this.idade = idadePessoa
//     this.andar = function () {
//         console.log(`${this.nome} andou por ${this.idade} anos.`)
//     }
// }

// const joao = new Pessoa('João', 20)
// const maria = new Pessoa('Maria', 25)
// const bruno = new Pessoa('Bruno', 15)

// joao.andar()
// ===================================

function Dom (seletor) {
    this.elements = document.querySelectorAll(seletor)

    this.addClass = function (classe) {
        this.elements.forEach((item) => {
            item.classList.add(classe)
        });
    }

    this.removeClass = function (classe) {
        this.elements.forEach((item) => {
            item.classList.remove(classe)
        });
    }
}

const li = new Dom('li')
const ul = new Dom ('ul')

li.addClass('ativado')
li.addClass('paratirar')
li.removeClass('paratirar')

ul.addClass('ativar-ul')



