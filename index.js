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

// landing
const landing = document.querySelector('.landing')
const landingChild = landing.children
const spotToNav = () => {
  landing.classList.toggle('bottom-4')
  landing.classList.toggle('right-4')
}
const toNav = () => {
  window.scrollTo(0, 0)
}
anime({
  targets: '.fristech path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 500,
  delay: function (el, i) {
    return i * 100
  },
  direction: 'alternate',
  loop: false,
})

anime({
  targets: '.rectangular',
  keyframes: [
    { translateY: -200, rotate: -90, opacity: '100%' },
    { translateY: 0, duration: 800, delay: 1500 },
    { rotate: -75, duration: 500 },
  ],
})

anime({
  targets: landing,
  width: 50,
  height: 50,
  delay: 3000,
  easing: 'easeInOutExpo',
  borderRadius: ['0%', '50%'],
  duration: 2000,
  update: () => {
    landing.classList.add('bottom-0')
    landing.classList.add('right-0')

    setTimeout(() => {
      for (let i = 0; i < landingChild.length; i++) {
        if (i != 0) landingChild[i].classList.add('hidden')
      }
    }, 4000)
  },
  complete: () => {
    if (screen.width > 768) {
      spotToNav()
    }
    landing.classList.add('opacity-50')
    landingChild[0].classList.add('w-full')
    landingChild[0].classList.add('h-full')
    landing.classList.remove('bg-slate-900')
    landing.classList.add('bg-slate-50')
    landing.classList.add('border-2')
    landing.classList.add('border-slate-900')
  },
})

/**
 * slide bar
 */

const toggle = document.querySelector('#toggle')
const slider = document.querySelector('#slider')
const li = toggle.children[0].children

const displaySlideBar = () => {
  const hiddenToTop = slider.classList.contains('hidden')
  if (hiddenToTop === true) {
    landing.classList.toggle('hidden')
  } else {
    landing.classList.toggle('hidden')
  }
  slider.classList.toggle('hidden')

  li[0].classList.toggle('w-full')
  li[0].classList.toggle('w-[90%]')

  li[1].classList.toggle('w-[70%]')
  li[1].classList.toggle('w-full')

  li[2].classList.toggle('w-full')
  li[2].classList.toggle('w-[70%]')
}
