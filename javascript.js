
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
let switchcalc = false
let lastKey = false
let lastOper = false

operators = {
    "+" : plus,
    "-" : minus,
    "X" : multiply,
    "/" : divide,
    "CE": clear,
    "DEL": del
}

function typeNum(e){
    if(isNaN(display.textContent)){
        display.textContent = ""
        nums = []
    }
    if(newCalc == true){
        display.textContent = ""
        newCalc = false
    }else if(nums.length == 2){
        nums.shift()
        nums.push(+display.textContent)
        display.textContent = ""
    }
    display.textContent += e.srcElement.innerText;
    lastKey = false;
}

function typeOper(e){  
    if(+display.textContent == 0){
        return
    }
    if(switchcalc == true){
        nums = []
        switchcalc = false
    }

    nums.push(+display.textContent);

    if(nums.length == 1){
        operator = operators[e.srcElement.innerText];
        display.textContent = "" 
    }else if(nums.length == 2){
        display.textContent = operator(nums[0], nums[1]);
        nums.push(display.textContent)
        nums.shift()
        operator = operators[e.srcElement.innerText];
    }else if(nums.length == 3){
        display.textContent = operator(nums[1], nums[2]);
        nums.shift()
        operator = operators[e.srcElement.innerText];
    }

    newCalc = false
    lastKey = true
    round()
}

function equals(){   

    if(nums.length == 0){
        return
    }
    nums.push(+display.textContent);
    if(nums.length == 2){
        display.textContent = operator(nums[0], nums[1])
        switchcalc = true
        round()
    }else if(nums.length == 3){
        display.textContent = operator(nums[1], nums[2])
        nums.pop()
        switchcalc = true
        round()
    }
    newCalc = true
    lastKey = false
    round()
}

function round(){
    if (+display.textContent.length > 8){
        display.textContent = display.textContent.slice(0,-1)
        display.textContent = Math.round(+display.textContent * 10)/10
    }else if(+display.textContent == 0){
        return
    }else{
     display.textContent = Math.round(+display.textContent * 10)/10   
    }
}

function clear(){
    display.textContent = ""
    operator = null;
    nums = []}

function del(){ display.textContent = display.textContent.slice(0,-1)}
function plus(a, b){ return (a + b)}
function minus(a, b){return a - b}
function divide(a, b){return a / b}
function multiply(a, b){return a * b}