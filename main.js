// When scroll
window.addEventListener('scroll', function () {
  backToTop()
  headerChangeWhenScrolling()
  activateMenuOnCurrentSection()
})

//  open and close menu when click on icon-menu or icon-close
let nav = document.querySelector('#header nav')
let toggle = document.querySelectorAll('nav .toggle')

for (let element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

//  Close menu when click on menu itens
let links = document.querySelectorAll('nav ul li a')
for (let link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// swiper carrousel

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: {
    sensitivity: 50,
    releaseOnEdges: true
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scroll reveal: show element when scroll wheel

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links
  `,
  { interval: 100 }
)

//  back to top button
let backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// header changer
let header = document.querySelector('#header, nav')
let navHeight = header.offsetHeight

function headerChangeWhenScrolling() {
  if (window.scrollY > navHeight) {
    header.classList.add('scroll')
    nav.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
    nav.classList.remove('scroll')
  }
}

/* active menu on a visible section */

const sections = document.querySelectorAll('main section[id]')
function activateMenuOnCurrentSection() {
  const limitOfView = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const pointOfViewStart = limitOfView >= sectionTop
    const EndOfView = limitOfView <= sectionTop + sectionHeight

    if (pointOfViewStart && EndOfView) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

function onHover() {
  let element = document.querySelector('.active')
  element.classList.remove('active')
}
