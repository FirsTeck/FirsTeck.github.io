/**
 * slide bar
 */

const toggle = document.querySelector('#toggle')
const slider = document.querySelector('#slider')
const li = toggle.children[0].children
const navbar = document.querySelector('#navbar')

const displaySlideBar = () => {
  slider.classList.toggle('hidden')

  li[0].classList.toggle('w-full')
  li[0].classList.toggle('w-[90%]')

  li[1].classList.toggle('w-[70%]')
  li[1].classList.toggle('w-full')

  li[2].classList.toggle('w-full')
  li[2].classList.toggle('w-[70%]')

  navbar.children[0].classList.toggle('text-blue-900')
  navbar.classList.toggle('bg-blue-900')
}

/**
 * card
 */

// button learn more
const button = document.querySelector('#button')
button.addEventListener('click', () => {
  button.previousElementSibling.children[1].classList.toggle('hidden')
})

//
const cards = document.querySelector('#card')
let divPr = ''
let funCardDIsplay = ''
let funCardDIsplay_2 = ''
let click = 0
cards.addEventListener('click', (e) => {
  click = 1
  let h3Sb = e.target.nextElementSibling
  let divSb = e.target.nextElementSibling.nextElementSibling
  divPr = e.target.parentElement
  const cardDisplay = () => {
    divPr.classList.toggle('run')
    h3Sb.classList.toggle('hidden')
    divSb.classList.toggle('hidden')
    divPr.classList.toggle('-scale-x-100')
  }
  const cardDisplay_2 = () => {
    divPr.classList.toggle('run')
    h3Sb.classList.toggle('items-center')
    divPr.classList.toggle('h-56')

    divSb.classList.toggle('hidden') // div
    divSb.classList.toggle('-scale-x-100') // div
  }

  funCardDIsplay = cardDisplay
  funCardDIsplay_2 = cardDisplay_2

  if (screen.width > 640) {
    cardDisplay()
  } else {
    cardDisplay_2()
  }
})

setInterval(() => {
  if (click === 0) {
    return
  }
  let check = divPr.classList.contains('run')
  if (check === true) {
    if (screen.width > 640) {
      funCardDIsplay()
    } else {
      funCardDIsplay_2()
    }
  }
}, 20000)

/**
 * reviews
 */

const splide = new Splide('.splide', {
  type: 'loop', //slide, loop, fade
  // padding: { y: 10 }, //css values
  gap: '1rem  ', //1 rem default
  // rewind: true,
  speed: 500, //transition in milliseconds
  // fixedWidth: '10vw',
  width: '100vw',
  perPage: 3,
  // start: 3,
  perMove: 1,
  autoplay: true,
  interval: 6000,
  arrows: false,
  pagination: false,
  pauseOnHover: true,
  wheel: true,
  loop: true,
  breakpoints: {
    768: {
      perPage: 2,
    },
    550: {
      perPage: 1,
    },
  },
})
splide.mount()
