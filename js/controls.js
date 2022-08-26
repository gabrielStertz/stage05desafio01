export default function Controls({
  elements,
  timerhandle
}){

  let timer = 0
  let playIndex = 0
  
  function changeColorWhenClicked(button){
    button.classList.add('increment-decrement-clicked')
    setTimeout(() => button.classList.remove('increment-decrement-clicked'), 500)
  }

  function playButtonClicked(){
    timerhandle.setTimer(Number(elements.minutes.textContent))
    if(playIndex == 0){
      elements.playButton.classList.add('clicked')
      timerhandle.countDown()
    } else if(playIndex > 0){
      changeColorWhenClicked(elements.playButton)
    }
    playIndex++
  }
  function stopButtonClicked(){
    elements.playButton.classList.remove('clicked')
    changeColorWhenClicked(elements.stopButton)
    timerhandle.stop()
    elements.minutes.textContent = String(timer).padStart(2, '0')
    elements.seconds.textContent = '00'
    playIndex = 0
  }
  function incrementButtonClicked(){
    changeColorWhenClicked(elements.incrementButton)
    elements.minutes.textContent = String(Number(elements.minutes.textContent) + 5).padStart(2, '0')
    timer = Number(elements.minutes.textContent)
    playIndex = 0
  }
  function decrementButtonClicked(){
    changeColorWhenClicked(elements.decrementButton)
    if(timer > 0){
      elements.minutes.textContent = String(Number(elements.minutes.textContent) - 5).padStart(2, '0')
    }
    timer = Number(elements.minutes.textContent)
  }
  return {playButtonClicked, stopButtonClicked, incrementButtonClicked, decrementButtonClicked}
}