import { gsap } from 'gsap'

const LETTERS_COUNT = 30
const CHARS = "{}[]()<>/\\=+*01;"

let intervalId: ReturnType<typeof setInterval> | null = null
let currentMode: 'dynamic' | 'static' | null = null

const container = document.getElementById('matrix-container')!
const className = "falling-letter"
const color     = "var(--color-textrain)"

const createLetter = () => {
  const span = document.createElement('span')
  const char = CHARS[Math.floor(Math.random() * CHARS.length)]

  span.className = className
  span.innerText = char

  const duration  = 4 + Math.random() * 8
  const size = 10 + Math.random() * 10
  const left = Math.random() * 100

  span.style.left       = `${left}vw`
  span.style.fontSize   = `${size}px`
  span.style.color      = color
  span.style.textShadow = `0 0 5px ${color}`

  container.appendChild(span)

  gsap.fromTo(span,
    {
      y: -30,
      opacity: 0
    },
    {
      y: window.innerHeight + 30,
      opacity: 1,
      duration: duration,
      ease: 'none',
      onComplete: () => span.remove(),
    }
  )
}

const createStaticLetter = () => {
  const span = document.createElement('span')
  const char = CHARS[Math.floor(Math.random() * CHARS.length)]

  span.className = className
  span.innerText = char

  const size = 10 + Math.random() * 10
  const left = Math.random() * 100
  const top = Math.random() * 90

  span.style.animation = 'none'
  span.style.left = `${left}vw`
  span.style.top = `${top}vh`
  span.style.fontSize = `${size}px`
  span.style.color = color
  span.style.textShadow = `0 0 5px ${color}`
  span.style.opacity = (0.1 + Math.random() * 0.3).toString()

  container.appendChild(span)
}

const clearLetters = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }

  gsap.killTweensOf(`.${className}`)
  container.querySelectorAll(`.${className}`).forEach(el => el.remove())
}

const animateLetters = () => {
  const mode = window.innerWidth > 768 ? 'dynamic' : 'static'
  if (mode === currentMode) return

  currentMode = mode
  clearLetters()

  if (mode === 'dynamic') {
    intervalId = setInterval(createLetter, 250)
  } else {
    for (let i = 0; i < LETTERS_COUNT; i++) {
      createStaticLetter()
    }
  }
}

animateLetters()
window.addEventListener('resize', animateLetters)
