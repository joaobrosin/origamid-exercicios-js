// crie uma função que verifique corretamente o tipo do dado

function tipoDoDado (dado) {
    return Object.prototype.toString.call(dado);
}

console.log(tipoDoDado([]));


// crie um objeto quadrado com a propriedade lados e torne ela imutável

// 1a opção
const quadrado = {
    lados: 4
};

Object.freeze(quadrado)
quadrado.lados = 3

console.log(quadrado.lados)

// 2a opção
const quadrado2 = {};

Object.defineProperties(quadrado2, {
    lados: {
        value: 4,
        enumerable: true,
    }
})

quadrado2.lados = 6
console.log(quadrado2.lados)


// previna qualquer mudança no objeto abaixo

const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao);

configuracao.width = 0;
console.log(configuracao.width)

delete configuracao.height
console.log(configuracao.height)


// liste o nome de todas as propriedades do protótipo de string e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))