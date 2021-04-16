// muda a cor da tela para branco e depois para azul a cada 2s

// const pintar = setInterval(() => {

//     document.body.style.backgroundColor = 'blue';
//     console.log('azul')

//     setTimeout(() => {
//         document.body.style.backgroundColor = 'red';
//         console.log('vemelho')
//     }, 2000);
    
// }, 4000)

// function mudarClasse() {
//     document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 2000);

// =========

/**
 * crie um cronometro utilizando o setInterval. Deve ser possível
 * inicial, pausar e resetar (duplo clique para pausar);
 */

const timer = document.querySelector('.timer')

timer.addEventListener('click', () => {

    if (!timer.classList.contains('active')) {

        for (let i = 0; i < 20; i++) {
            const cronometro = setInterval(() => {
                console.log(i)
            }, 1000)  
            
        }
        
        timer.classList.add('active');

    } else {

        console.log('parou')
        timer.classList.remove('active');
    }
})