// ====================================================
// object.create()
// retorna um novo objeto que terá como prototipo o objeto do primeiro argumento

const pessoa = new Object({
    nome: 'João'
})

const carros = {
    rodas: 4,
    init(valor) {
        this.marca = valor;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carros);
honda.init('Honda Civic')

// ou

const golf = Object.create(carros).init('Golf');

Object.assign

//  =================================================
// object.assign()
// adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos.
// o assign irá modificar o objeto alvo.

const funcaoAutomovel = {
    acelerar () {
        return 'acelerou';
    },
    buzinar () {
        return 'buzinou';
    },
}

const carro = {
    rodas: 4,
    portas: 4,
}

const moto = {
    rodas: 2,
    capacete: true,
}

Object.assign(carro, funcaoAutomovel) // modifica objeto carro, adicionando as funções de automovel
Object.assign(moto, funcaoAutomovel, carro) // adiciona funcoes de automovel e carro

// ====================================================
// object.defineProperties() 
// adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem
// definidas as caracteristicas dessas propriedades.

const caminhao = {}

Object.defineProperties(caminhao, {
    rodas: {
        value: 2,
        writable: false, // torna a variavel rodas imutavel, não da pra alterar
        configurable: false, // torna a variavel rodas não deletável, não pode deletar
    } 
    // writable e configurable tem default "false". Não precisa colocar se quiser manter false
})

caminhao.rodas = 5 // não modifica o num de rodas, pq não é writable
delete caminhao.rodas // não consigo deletar a variavel rodas, pq não é configurable

// ====================================================
// object.defineProperties() com get e set 

const van = {
    capacete: false,
}

Object.defineProperties(van, {
    rodas: {
        get() {
            return this._rodas;
        },
        set(valor) {
            this._rodas = valor * 4 + ' é o total de rodas'
        }
    } 
})

van.rodas = 4

// ========================================================
// Object.getOwnPropertyDescriptors(obj)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações

// console.log(Object.getOwnPropertyDescriptors(van)) // mostra todas as propriedades do objeto

// console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight')) // mostra uma propriedade especifica


// ========================================================

const identidade = {
    nome: 'João',
    sexo: 'masculino',
    nascimento: 1992,
    naturalidade: 'brasileiro'
}

// Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto
// console.log(Object.keys(identidade))

// Object.values(obj) retorna uma array com os valores do objeto
// console.log(Object.values(identidade))

// Object.entries(obj) retorna uma array com array's contendo a chave e o valor
// console.log(Object.entries(identidade))

// Object.getOwnPropertyNames(Array) retorna array com as propriedades diretas (não retorna as do protótipo)
// console.log(Object.getOwnPropertyNames(identidade))

// Object.getPrototypeOf() - retorna o protótipo do objeto. 
// console.log(Object.getPrototypeOf(identidade))

const frutas1 = ['banana', 'laranja'];
const frutas2 = ['banana', 'laranja'];

const novaFruta = frutas1;

// Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false
// console.log(Object.is(frutas1, frutas2))

// console.log(Object.is(frutas1, novaFruta))


// =============================================================
// Object.freeze() impede qualquer mudança nas propriedades
// Object.freeze(identidade);
// identidade.nome = 'Não é João' // não vai ser modificado
// console.log(identidade)

// Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas
// Object.seal(identidade)
// identidade.idade = 28 // nao vai ser adicionado
// delete identidade.nascimento // nao vai ser deletado
// console.log(identidade)

// Object.preventExtensions() previne a adição de novas propriedades
// Object.preventExtensions(identidade);
// delete identidade.naturalidade // vai ser deletado
// identidade.peso = 70 // não vai ser adicionado
// console.log(identidade)

// =============================================================


const frutas = ['banana', 'uva', 'melancia'];
const frase = 'Oi frase'

const somar = function(a, b) {
    return a + b;
}

const marca = {
    carro: 'Ford',
    roupa: 'Levis',
    celular: 'Samsung'
}

// console.log(frutas.toString());
// console.log(frase.toString());
// console.log(somar.toString());
// console.log(marca.toString());

// console.log(Object.prototype.toString.call([]))
// console.log(Object.prototype.toString.call('é uma string'))
// console.log(Object.prototype.toString.call({}))
// console.log(Object.prototype.toString.call(123))







