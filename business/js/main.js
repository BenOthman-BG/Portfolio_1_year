
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== CARD POPUP JS ===============*/
const modal = document.querySelectorAll('.modal'),
    cardBtn = document.querySelectorAll('.card__product'),
    modalClose = document.querySelectorAll('.modal__close'),
    modalCard = document.querySelectorAll('.modal__card')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

/* Show modal */
cardBtn.forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
        activeModal(i)
    })
})

/* Hide modal */
modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

/* Hide modal on background click */
modal.forEach((modal) => {
    modal.addEventListener('click', () => {
        modal.classList.remove('active-modal')
    })
})

/* Don't hide modal on card click (by event propagation) */
modalCard.forEach((modalCard) => {
    modalCard.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})