
const numBtn = document.querySelectorAll('.btn')
numBtn.forEach(num => num.addEventListener('click', typeNum))

const operBtn = document.querySelectorAll('.oper-btn')
operBtn.forEach(oper => oper.addEventListener('click', typeOper))

const equalBtn = (document.querySelector('.equal-btn'))
equalBtn.addEventListener('click', equals)

let display = document.getElementById('screen')



screen = []

let leftNum = null
let rightNum = null

Nums = []

let operator = null

operators = {
    "+" : plus,
    "-" : minus,
    "*" : divide,
    "/" : multiply,
}

function typeNum(e){
    screen.push(e.srcElement.innerText)
}

function typeOper(e){
    joinNums(screen);
    clearScreen(screen);
    operator = operators[e.srcElement.innerText]
}

function joinNums(array){
    let x = +array.join("")
    Nums.push(x)
}

function clearScreen(){
    screen = []
}

function equals(){
    joinNums(screen);
    clearScreen;
    console.log(Nums)
    leftNum = Nums[0]
    rightNum = Nums[1]
    operator(Nums[0], Nums[1])
    refreshScreen(display)
}

function refreshScreen(display){
     display.textContent = "Hey"
}

function plus(a, b){
    console.log(a + b)
}

function minus(a, b){
    console.log(a - b)
}

function divide(a, b){
    console.log(a / b)
}









