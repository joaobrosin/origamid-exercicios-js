// ========================================================================
// selecione cada curso e retorna uma array
// com objetos contendo o título, descrição,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso')

const arrayCursos = Array.from(cursos)

const objetosCurso = arrayCursos.map((curso, index, array) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText

    return {
        titulo, 
        descricao,
        aulas,
        horas
    }
})

// console.log(objetosCurso)


// ========================================================================

// retorne uma lista com os numeros
// maiores que 100

const numerosEx = [3, 44, 333, 23, 122, 322, 33, 99, 101];

const maiorQue100 = numerosEx.filter((numero) => {
    return numero > 100;
})

// console.log(maiorQue100); // 333, 122, 322, 101

// ========================================================================

// verifique se Baixo faz parte
// da lista de instrumentos e retorne true

const instrumentosEx = ['guitarra', 'baixo', 'bateria', 'teclado'];

const temBaixo = instrumentosEx.some((item) => {
    return item == 'baixo'
})

// console.log(temBaixo)

// ========================================================================

// retorne o valor total das compras

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
]


const valorTotal = compras.reduce((acumulador, item, index, array) => {

    const precoLimpo = +item.preco.replace('R$', '').replace(',', '.');

    return acumulador + precoLimpo
}, 0)

// console.log(valorTotal) /// 49.42