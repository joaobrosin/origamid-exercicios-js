// ================== hide content

function initTabNav () {

    const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabcontent = document.querySelectorAll('[data-tab="content"] section')
    
    if (tabmenu.length && tabcontent.length) {
    
        tabcontent[0].classList.add('ativo')
    
        function activeTab(index) {
            tabcontent.forEach((section) => {
                section.classList.remove('ativo')
            })
            const direcao = tabcontent[index].dataset.anime;
            tabcontent[index].classList.add('ativo', direcao)
        }
    
        tabmenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}

initTabNav()

// =============== accordion list

function initAccordion () {

    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    const activClass = 'ativo'

    if (accordionList.length) {
        
        accordionList[0].classList.add(activClass)
        accordionList[0].nextElementSibling.classList.add(activClass)
        
        
        function activeAccordion () {
            this.classList.toggle(activClass)
            this.nextElementSibling.classList.toggle(activClass)
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }

}

initAccordion()


// =================== smooth scroll


function initScrollSuave () {

    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"')
    
    function scrollToSection (event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
    
        // forma 1
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });


        
        // forma alternativa
        // const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // })
    
    
    
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave()

// ===========

function initAnimacaoScroll () {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;
        
        function animaScroll () {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowMetade) < 0
                
                if (isSectionVisible) {
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo')
                }
            })
        }
        
        animaScroll()
        
        window.addEventListener('scroll', animaScroll)
    
    }

}

initAnimacaoScroll()