import {elements} from './elements.js'
import {soundButtonClicked} from './soundButton.js'
import Controls from './controls.js'
import handleTimer from './timer.js'

const timerhandle = handleTimer()
const handleControlButtonsClicked = Controls({elements, timerhandle})

elements.playButton.addEventListener('click', handleControlButtonsClicked.playButtonClicked)
elements.stopButton.addEventListener('click', handleControlButtonsClicked.stopButtonClicked)
elements.incrementButton.addEventListener('click', handleControlButtonsClicked.incrementButtonClicked)
elements.decrementButton.addEventListener('click', handleControlButtonsClicked.decrementButtonClicked)
elements.florestButton.addEventListener('click', () =>{
  soundButtonClicked(elements.florestButton)
})
elements.rainButton.addEventListener('click', () =>{
  soundButtonClicked(elements.rainButton)
})
elements.houseButton.addEventListener('click', () =>{
  soundButtonClicked(elements.houseButton)
})
elements.fireButton.addEventListener('click', () =>{
  soundButtonClicked(elements.fireButton)
})