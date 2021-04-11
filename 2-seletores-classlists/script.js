const linksInternos = document.querySelectorAll('a[href^="#"')

function removeAllActive() {
    linksInternos.forEach((link) => {
        link.classList.remove('ativo')
    })
}

function addActive(link) {
    link.classList.add('ativo')
}

linksInternos.forEach((link) => {
    link.addEventListener('click', (event) => {

        event.preventDefault()
        removeAllActive()
        addActive(link)
    })
})


// ===

// const allElements = document.querySelectorAll('body *')

// function handleElement(event) {
//     console.log(event.currentTarget)
// }

// allElements.forEach((element) => {

//     element.addEventListener('click', handleElement)
// })

//  ===

// function hideElement(event) {
//     event.currentTarget.remove()

// }

// allElements.forEach((element) => {

//     element.addEventListener('click', hideElement)
// })

//  ===

function changeFontSize(event) {
    if (event.key === 't') {
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', changeFontSize)
