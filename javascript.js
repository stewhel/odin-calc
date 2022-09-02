
const numBtn = document.querySelectorAll('.btn')
numBtn.forEach(num => num.addEventListener('click', typeNum))

const operBtn = document.querySelectorAll('.oper-btn')
operBtn.forEach(oper => oper.addEventListener('click', typeOper))

const equalBtn = (document.querySelector('.equal-btn'))
equalBtn.addEventListener('click', equals)

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', clear)

const delBtn = document.getElementById('del')
delBtn.addEventListener('click', del)

let display = document.getElementById('screen')

let newCalc = true
let operator = undefined
let nums = []

operators = {
    "+" : plus,
    "-" : minus,
    "X" : multiply,
    "/" : divide,
    "CE": clear,
    "DEL": del
}

function typeNum(e){
    if(newCalc == true){
        display.textContent = ""
        newCalc = false
        console.log(newCalc)
    }
    display.textContent += e.srcElement.innerText;
    round();
}

function typeOper(e){  
    operator = operators[e.srcElement.innerText];
    nums.push(+display.textContent);
    display.textContent = ""
    if(nums.length == 2){
        display.textContent = operator(nums[1], nums[2])
        round()
    }if(nums.length == 3){
        nums.shift()
        nums.shift()
    }
    newCalc = false
}

function equals(){   
    nums.push(+display.textContent);
    if(nums.length == 2){
        display.textContent = operator(nums[0], nums[1])
        round()
    }else if(nums.length == 3){
        display.textContent = operator(nums[1], nums[2])
        round()
        nums.pop()
    }
    newCalc = true
}

function round(){
    if (+display.textContent.length > 8){
        display.textContent = display.textContent.slice(0,-1)
    }
    display.textContent = Math.round(+display.textContent * 10)/10
}

function clear(){display.textContent = ""}
function del(){ display.textContent = display.textContent.slice(0,-1)}
function plus(a, b){return a + b}
function minus(a, b){return a - b}
function divide(a, b){return a / b}
function multiply(a, b){return a * b}