// function espera (texto) {
//     console.log(texto)
// }

// setTimeout(espera, 1000, 'Passou 1s')

// =========

// setTimeout(() => {
//     console.log('testando')
// }, 2000)

// =========
// set time out com loop para fazer um contador:

// for (let i = 0; i < 20; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000 * i)  
// }

// =========

// const btn = document.querySelector('button')

// btn.addEventListener('click', handleClick)

// function handleClick () {

//     setTimeout(function() {
//         console.log('aqui o this é o window:', this)
//     }, 100)

//     console.log('aqui o this é o btn:', this)
// }

// ==== use arrow function para resolver o problema do this

// const btn = document.querySelector('button')

// btn.addEventListener('click', handleClick)

// function handleClick () {

//     setTimeout(() => {
//         console.log('aqui o this não é mais o window:', this)
//     }, 100)

//     console.log('aqui o this é o btn:', this)
// }

// =========

// function loop (texto) {
//     console.log(texto)
// }

// setInterval(loop, 1000, 'passou 1 s');

// ===============

// function loop (texto) {
//     console.log(texto)
// }

// let i = 0;

// const cronometro = setInterval(() => {

//     console.log(i++);

//     if (i > 10) {
//         clearInterval(cronometro);
//     }

// },100)

// ====