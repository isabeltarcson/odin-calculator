const one = document.getElementById("o");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");

const mult = document.getElementById("multiply");
const divide = document.getElementById("divide");
const sub = document.getElementById("subtract");
const sum = document.getElementById("add");

const dot = document.getElementById("decimal");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

const button = document.querySelectorAll('button')
const screen = [];
for (var i = 0 ; i < button.length; i++) {
    let item = button[i];
    item.addEventListener('click' , function() {caluclate(item)}, false) ; 
 }

 function caluclate(pep) {
    let wah = pep.textContent;
    screen.push(wah);
    console.log(screen);
    writetoScreen();

 }

 function writetoScreen() {
    const ans = document.getElementById("answer");
    let answer = screen.join("")
    ans.textContent = answer;
 }
 