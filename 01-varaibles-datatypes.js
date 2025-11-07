let name = "Abubakar khan";
let marks = 443;
let college = "gove college peshawar";

console.log(name)
document.write(name)

const student = {
    name : 'abubakr',
    marks : 443,
    college : 'govt college pshr',
    class : '12th',
    faculty : 'computer science'
}

console.log(student)

//data types
//primative data types

let string = "khan";
let number = 123;
let boolean = true;

let num = 9;

if(num % 2 === 0){
    console.log("even");
}else{
    console.log("odd")
}


let mode = 'white';

let color ;

if(mode === 'dark'){
    color = 'black'
}else{
    color = 'white'
}

console.log(color)

let a = 5;
let b = 10;

let operator = '+';
if(operator === '+'){
    console.log("a = 5 & b = 10 : ")
    console.log( a + b);
}else if (operator === '-') {
    console.log(a - b);
}else if(operator === '*'){
    console.log(a * b);
}else if(operator === '/'){
    console.log(b === 0 ? 'can not divide' : a / b);
}

//loops in javascript

for (let count = 0; count <= 10; count++) {
    console.log(count);   
}

let nums = 10;
for (let num = 1; num <= nums; num += 2) {
    console.log("khan");
}

//addation of even numbers upto 100

let sum = 0;
for (let r = 2; r <= 10; r+= 2) {

   sum += r 
}

console.log('sum :', sum)

//game with loop

// let gameNum = 10;
// let userNum = prompt('Guess the number');

// // if (gameNum != userNum) {
// //     userNum = prompt('you entered wrong number, guess again');
// // }
// while(gameNum != userNum){
//      userNum = prompt('you entered wrong number, guess again');
// }

for (let n = 2; n <= 100; n++) {
  if (n % 2 !== 0) {
    console.log(n)
  }    
}

console.log('congratulation');

let j = 0;
while(j <= 10){
    console.log(j)
    j++;
}

//array in js

//calculate the average of the marks array

let stdnts_marks = [70, 89, 80];

let total = 0;

for (const mark of stdnts_marks) {
    total += mark
}

console.log('avarage :',total / stdnts_marks.length);

//question 2

let items =[400, 780, 390, 120, 500];

for (let i = 0; i < items.length; i++) {
    console.log('the value before offer : ', items[i]);
  let offer = items[i] / 10;
  items[i] -= offer;
  console.log('the value after offer',items[i]);
}

