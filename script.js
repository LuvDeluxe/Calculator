const display = document.getElementById('display')
const buttons = document.querySelectorAll('.button')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')

let firstOperand = ''
let operator = ''
let secondOperand = ''
let isSecondOperand = false

document.getElementById('display').addEventListener('keydown', event => {
  event.preventDefault()
})

buttons.forEach((button) => {
  updateDisplay(button)
})

function updateDisplay(button) {
  button.addEventListener('click', event => {
    if (button.classList.contains('operator')) {
      handleOperatorClick(event.target.innerText)
    } else {
      handleNumberClick(event.target.innerText)
    }
  })
}

function handleNumberClick(number) {
  if (isSecondOperand) {
    secondOperand += number
    display.value = firstOperand + ' ' + operator + ' ' + secondOperand
  } else {
    if (firstOperand.length === 0 && number === '.') {
      return
    }

    if (number === '.' && firstOperand.includes('.')) {
      return
    }

    firstOperand += number
    display.value = firstOperand
  }
}

function handleOperatorClick(operatorSymbol) {
  if (firstOperand !== '' && !isSecondOperand) {
    operator = operatorSymbol
    isSecondOperand = true
    display.value = ` ${operator}`
  }
}

function calculateResult(num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      return NaN
  }
}

equalButton.addEventListener('click', () => {
  if (isSecondOperand && secondOperand !== '') {
    const result = calculateResult(parseFloat(firstOperand), parseFloat(secondOperand))
    display.value = result
    firstOperand = result.toString()
    secondOperand = ''
    operator = ''
    isSecondOperand = false
  }
})

clearButton.addEventListener('click', () => {
  display.value = ''
  firstOperand = ''
  secondOperand = ''
  operator = ''
  isSecondOperand = false
})