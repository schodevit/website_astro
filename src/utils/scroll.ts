import { gsap } from 'gsap'

const backButton = document.getElementById('back-to-top')!
const arrowIcon = backButton.querySelector('.absolute')!

const progressCircle = document.getElementById('progress-circle')!
const circumference = 2 * Math.PI * 24

const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercentage = window.scrollY / scrollHeight

  // Update the Circle Progress
  const offset = circumference - (scrollPercentage * circumference)
  progressCircle.style.strokeDashoffset = offset.toString()

  // Visibility Logic (Appear at 50%)
  const posY = scrollPercentage > 0.5 ? 0 : 20
  const opacity = scrollPercentage > 0.5 ? 1 : 0

  gsap.to(backButton, {
    y: posY,
    opacity: opacity,
    duration: 0.3,
    ease: "power1.out"
  })

  // Bounce Logic at 98%
  if (scrollPercentage > 0.98) {
    gsap.to(arrowIcon, {
      y: -10,
      duration: 0.3,
      yoyo: true,
      repeat: 2,
      ease: "power1.inOut",
      onComplete: () => gsap.to(arrowIcon, { y: 0 })
    })
  }
}

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })

  gsap.to(arrowIcon, {
    y: -20,
    duration: 0.3,
    ease: "power1.out",
    onComplete: () => gsap.to(arrowIcon, { y: 0 })
  })
}

window.addEventListener('scroll', handleScroll, { passive: true })
backButton.addEventListener('click', handleClick)
