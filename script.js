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
const operators = [mult.textContent, divide.textContent, sub.textContent, sum.textContent]
const screen = [];
let number2 = [];
let poperator = [];
for (var i = 0 ; i < button.length; i++) {
    let item = button[i];
    item.addEventListener('click' , function() {caluclate(item)}, false) ; 
 }

 function caluclate(pep) {
   if (pep.id == "equal") {
      console.log(screen)
      evaluate();
   }
   else {
      let number1 = pep.textContent;
      screen.push(number1);
      console.log(number1);
      writetoScreen();
      
   }

 }

 function writetoScreen() {
    const ans = document.getElementById("answer");
    let answer = screen.join("")
    ans.textContent = answer;
 }

 function evaluate() {
   let op;
   for (let i = 0; i < operators.length; i++){
      let index = screen.indexOf(operators[i])
      if (index > 0) {
         op = index;
      }
   }
   console.log(op)
   number2 = screen.splice(op)
   
   poperator = number2.splice(0,1);
   console.log(screen, number2, poperator)
   let answer = doMath();
   writeAnswer(answer);

 }

 function doMath () {
   let temp1 = screen.join("");
   const num1 = parseInt(temp1);
   let temp2 = number2.join("");
   const num2 = parseInt(temp2);
   console.log(num1, poperator, num2)
   let answer;
   switch (poperator[0]) {
      case "+":
         answer = num1+num2;
         break;
      case "-":
         answer = num1-num2;
         break;
      case "/":
         answer = num1/num2;
         break;
      case "x":
         answer = num1*num2;
         break;
      case "":
         answer = num1;
         break;
   }
   console.log(answer)
   return answer;
 }

function writeAnswer(answer) {
   const ans = document.getElementById("answer");
   ans.textContent = answer;
}
 