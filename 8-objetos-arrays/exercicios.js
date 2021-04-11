const alimentos = ['0pizza', '1frango', '2carne', '3macarrão']

// // remova o primeiro valor de comidas e coloque em uma variável
// const primeiroAlimento = alimentos.shift()
// console.log(primeiroAlimento)

// // remove o último valor de comidas e coloque em uma variável
// const ultimoAlimento = alimentos.pop()
// console.log(ultimoAlimento)

// // adicione 'arroz' ao final da array
// alimentos.push('arroz')
// console.log(alimentos)

// // adicione 'peixe' e 'batata' ao inicio da array
// alimentos.unshift('peixe', 'batata')
// console.log(alimentos)

// ===================

const estudantes = ['marcio', 'brenda', 'joana', 'kleber', 'julia']
// console.log(estudantes)

// // arrume os estudantes em ordem alfabetica
// estudantes.sort()
// console.log(estudantes)

// // inverta a ordem dos estudantes 
// estudantes.reverse()
// console.log(estudantes)

// // verifique se joana faz parte dos estudantes
// console.log(estudantes.includes('joana')) // true
// console.log(estudantes.includes('JOANA')) // false

// console.log(estudantes.toString().toUpperCase().includes('JOANA')) // true


// ====================

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`

// console.log(html)

// substitua section por ul e div com li,
// utilizando split e join

// htmlModified = html.split('section')
// htmlModified = htmlModified.join('ul')

// htmlModified = htmlModified.split('div') // atencao que está chamando o html modificado
// htmlModified = htmlModified.join('li')

// console.log(htmlModified)

// ==========================================

const automoveis = ['Ford', 'Fiat', 'VW', 'Honda']

// remova o ultimo carro, mas antes de remover
// salve a array original em outra variável

const automoveisClone = automoveis.slice()

automoveis.pop()

console.log(automoveis)
console.log(automoveisClone)
