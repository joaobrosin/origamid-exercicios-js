window.load = slide(1);

let bgNumber = 1

function slide(n) {
    const allBgs = 4
    document.querySelector('#image-bg').style.backgroundImage = "url('images/" + n + ".jpg')"
    botoes(n, allBgs)
}

const anteriorBtn = document.querySelector('.anterior')

function anteriorFu() {
    if (bgNumber > 1) {
        bgNumber--
        slide(bgNumber)
    }
    console.log(bgNumber)
}

anteriorBtn.addEventListener('click', anteriorFu)

const proximoBtn = document.querySelector('.proximo')

function proximoFu() {
    if (bgNumber < 4) {
        bgNumber++ 
        slide(bgNumber)
    }
    console.log(bgNumber)
}

proximoBtn.addEventListener('click', proximoFu)


function botoes(n, m) {
    document.querySelector('#botoes').innerHTML = ""
    for (a=1; a <= m ; a++) {
        if (a == n) {
            document.querySelector('#botoes').innerHTML += '<li class="selected" onclick=slide(' + a + ')></li>'
        } else {
            document.querySelector('#botoes').innerHTML += '<li onclick=slide(' + a + ')></li>'
        }
    }
}

