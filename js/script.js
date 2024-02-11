import {Modal} from './modal.js'
import { AlertError } from "./alert.js"
import { notANumber, IMC } from "./utils.js"

//variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal .title img')


//2 maneira de criar e atribuir função a um evento
// form.onsubmit = function(event) {
//   event.preventDefault()
//   const weight = inputWeight.value
//   const height = inputHeight.value
//   console.log(weight,height)

// }

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = handletSubmit
function handletSubmit (event) {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrheightIsNotANumber  = notANumber(weight) || notANumber(height)
  
  if (weightOrheightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight,height)
  const message = `Seu IMC é de ${result}`

  
  Modal.message.innerText =  message
  Modal.open()
}

