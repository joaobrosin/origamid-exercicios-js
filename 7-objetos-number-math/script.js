// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN(8)) // false
// console.log(Number.isNaN('string')) // false

// console.log(Number.isInteger(20)) // true
// console.log(Number.isInteger(21.5)) // false
// console.log(Number.isInteger('sas')) // false

// console.log(Number.parseFloat(99.50)) // 99.5
// console.log(Number.parseFloat('100.00 R$')) // 100
// console.log(Number.parseFloat('R$c100.00')) // NaN

// console.log(Number.parseInt(100.27)) // 100 - tira valores decimais
// console.log(Number.parseInt('100.27 reais')) // 100 - tira valores decimais


// const preco = 256.5955
// console.log(preco.toFixed()) // 257 em string
// console.log(preco.toFixed(1)) // 256.6
// console.log(preco.toFixed(2)) // 256.60
// console.log(preco.toFixed(3)) // 256.596
// console.log(preco.toFixed(4)) // 256.5955

// const preco2 = 2.99
// console.log(preco2.toString()) // 2.99 em string



// const moeda = 59.49

// const moedaBR = moeda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

// console.log(moedaBR) // R$ 59,49

// const moedaUS = moeda.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

// console.log(moedaUS) // $59.49

// // MATH =========================================
// console.log('========= MATH ===========')


// console.log(Math.PI)

// console.log(Math.abs(-5.5)) // 5.5
// console.log(Math.abs( 4 - 5)) // 1

// console.log(Math.ceil(4.8834)) // 5 - arredonda para cima
// console.log(Math.floor(4.8834)) // 4 - arredonda para baixo

// console.log(Math.round(4.8335)) // 5 -  arredonda para o mais proximo
// console.log(Math.round(4.4335)) // 4 -  arredonda para o mais proximo

// console.log(Math.max(5, 3, 10, 42, 2)) // 42 - maior numero
// console.log(Math.min(5, 3, 10, 42, 2)) // 2 - menor numero

// console.log(Math.random()) // retorna numero aleatório

// console.log(Math.random() * 100) // retorna numero aleatório de 0 a 100

// console.log(Math.random() * 30) // retorna numero aleatório de 0 a 30

// console.log(Math.floor(Math.random() * 10)) // retorna numero aleatório de 0 a 10 sem virgula


// const max = 50
// const min = 40
// console.log(Math.floor(Math.random() * (50 - 40 + 1)) + 40) // retorna numero aleatório de 40 a 50
// console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula do item acima






