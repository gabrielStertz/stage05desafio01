const playButton = document.querySelector('#play')
const stopButton = document.querySelector('#stop')
const incrementButton = document.querySelector('#increment')
const decrementButton = document.querySelector('#decrement')
const florestButton = document.querySelector('.florest')
const rainButton = document.querySelector('.rain')
const houseButton = document.querySelector('.house')
const fireButton = document.querySelector('.fire')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const florestSound = document.querySelector('#florestSound')
const rainSound = document.querySelector('#rainSound')
const houseSound = document.querySelector('#houseSound')
const fireSound = document.querySelector('#fireSound')

export const elements = {
  playButton,
  stopButton,
  incrementButton,
  decrementButton,
  florestButton,
  rainButton,
  houseButton,
  fireButton,
  minutes,
  seconds,
  kitchenTimer,
  florestSound,
  rainSound,
  houseSound,
  fireSound
}