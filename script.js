const display = document.getElementById('display')
const buttons = document.querySelectorAll('.button')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.ac')

let firstOperand = ''
let operator = ''
let secondOperand = ''
let isSecondOperand = false