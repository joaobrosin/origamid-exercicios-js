// Retorne a soma total de caracteres dos parágrafos
// utilizandoi reduce

const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos);

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length
}, 0)

// console.log(totalCaracteres);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo

function criarElemento (tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento
}

console.log(criarElemento('p', 'ativo', 'Este é um parágrafo gerado com a função "criarElemento"'))


// crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Titulo gerado automaticamente com a função "h1Titulo"'))