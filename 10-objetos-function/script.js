// const perimetro = new Function ('lado', 'return lado * 4')

// console.log(perimetro(5)) // 20

// function somar(n1, n2) {
//     return n1 + n2
// }

// console.log(somar(5, 5)) // 10

// console.log(somar.length) // 2 - retorna a quantidade de parâmetros da função

// console.log(somar.name) // somar - retorna o nome da função em formato de string

// ====================================
// function.call(this, arg1, arg2, ...)
// executa a função, sendo possível passarmos uma nova referência ao "this" da mesma.

// function darOi(nome, sobrenome) {
//     console.log('Oi para você ' + nome + ' ' + sobrenome)
// }

// darOi.call(null, 'André', 'Rafael')

// function descricaoCarro (velocidade) {
//     console.log(this)
//     console.log(this.marca + ' ' + this.ano + ' ' + velocidade)
// }

// descricaoCarro.call({marca: 'Honda', ano: 2020}, '100km/h')


// ===================================
// utilização de function.call

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Maçã', 'Laranja'];

// carros.forEach.call(frutas, (item) => {
//     console.log(item);
// }) // retorna array de frutas no lugar da array de carros

// ==================================

// const frutas2 = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.mostrarThis = function() {
//     console.log(this);
// }

// console.log(frutas2.mostrarThis())

// Array.prototype.pop.call(frutas2);
// console.log(frutas2)

// frutas2.pop()
// console.log(frutas2)

// =====================================
// function.apply()
// o applyt(this, [arg1, arg2,...]) funciona como o call, 
// a única diferença é que os argumentos da função são passados através de uma array

// console.log(Math.max(3, 5, 7, 10, 15, 1, 6)) //15


// const numeros = [3, 5, 7, 10, 15, 1, 6]
// console.log(Math.max(numeros)) // NaN

// console.log(Math.max.call(null, numeros)) // NaN

// console.log(Math.max.apply(null, numeros)) // 15 - o apply consegue ler a array

// ====================================
// function.bind()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função,
// mas sim retornar a mesma com o novo contexto de this.

// const $ = document.querySelector.bind(document);

// console.log($('li')) // retorna o li (como se tivesse utilizando jquery)
// console.log($('ul')) // retorna o ul

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
//     acelerar: function(aceleracao, tempo) {
//         return `${this.marca} acelerou ${aceleracao} em ${tempo}`
//     }
// }

// console.log(carro.acelerar(300, '1h')) // Ford acelerou 300 em 1h

// const honda = {
//     marca: 'Honda',
// }

// const acelerarHonda = carro.acelerar.bind(honda);
// console.log(acelerarHonda(300, '1h')) // Honda acelerou 300 em 1h




