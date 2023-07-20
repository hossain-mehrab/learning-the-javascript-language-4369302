//Strick equality
var one = 1,
  two = 2;

one === one; // true
one !== one; // false
one !== two; // true
one === two; // false
one === "1"; // false

//Regular equality

one == one; // true
one == "1"; // true (?!)
one != "1"; // false (?!)


one < two; // true

one > two; // false

one <= two; // true

one <= one; // true

one >= two; // false

10 >= two; // true

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators



//Arithmetic operations +, -, *. /, % (modulas)
2 + 5;
4 - 3;
5 - 9;
3 * 5;
36 / 6;
36 / 5;

20 % 2;
19 % 2;

// twenty an even number?
20 % 2 === 0; // true

const perPage = 20;
const totalResults = 254;
totalResults % perPage;

var counter = 0;
counter = counter + 1;

counter += 1;
counter++;

counter += 5;
counter += -4;

counter -= 1;
counter--;
counter;

counter *= 2;

"cat" + "dog";
"cat " + "dog";
"cat" + " and " + "dog";

"1" + "2";

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#String_operators


//Logical operator &&, ||, ! 

// &&
// ||

let animal11 = "monkey", animal2 = "bear", animal3 = "tiger";

// Pretend there's code that might change the values of the animal variables here, then…

animal11 === "monkey" && animal2 === "bear"; // true
animal11 === "ape" && animal2 === "bear"; // false
animal11 === "ape" && animal2 === "bear" && animal3 === "tiger"; // false
animal11 === "monkey" && animal2 === "bear" && animal3 === "tiger"; // true

animal11 === "monkey" || animal2 === "bear"; // true
animal11 === "ape" || animal2 === "bear"; // true
animal11 === "ape" || animal2 === "ostrich"; // false

animal11 === "monkey" || animal2 === "monkey" && animal3 === "tiger";
(animal11 === "monkey" || animal2 === "monkey") && animal3 === "tiger";

!true; // false
!false; // true

animal11 === "monkey" && animal2 === "zebra"; // false
!(animal11 === "monkey" && animal2 === "zebra"); // true
animal11 !== "monkey" && animal2 !== "zebra"; // false
animal11 !== "monkey" || animal2 !== "zebra"; // true

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Logical_operators


//Conditional (Controlled Structires)

let answer = window.confirm ("Click ok to get True, and click cancle to get False");
console.log (answer);
if (answer === true){
  console.log("You confirm Ok");
}
else{
  console.log("You confirm Cancle");
}; 


let answer1 = window.prompt ("Write TRUE, FALSE, CONFIRM");
console.log (answer1);
if (answer1 === "TRUE" || answer1 === "FALSE")
{
    if (answer1 === "TRUE")
    {
      console.log("You confirm TRUEEEE");
    }
    else
    {
      console.log("You confirm FALSEEEE");
    }
  } 
else if (answer1 === "FALSE")
{
  console.log("You confirm FALSE");
}
else if (answer1 === "CONFIRM")
{
  console.log("You confirm CONFIRM");
}
else
{
  console.log("You do nothing");
}


let answer2 = window.prompt ("Write TRUE, FALSE, CONFIRM");

switch (answer2){
  case ("TRUE"):
    console.log("You confirm TRUE");
  break;
  case ("FALSE"):
    console("You confirm FALSE");
  break;
    case ("CONFIRM"):
    console("You confirm CONFIRM");
  break;
  default:
  console("You do nothing");
}

let answer3 = window.prompt ("Write TRUE, FALSE, CONFIRM");
if (answer3 ==="TRUE") console.log("You Select True");

let errorMessage = ""
if (!errorMessage) console.log("You Select True");


//Turnery operator (?)

let animal9 = "cat"
 animal9 === "Cat" ? console.log("You love Cat"):console.log("You love Cat")


let job2 = animal9 === "cat" ? "You love Dog": "You love Cat";
console.log (job2)



let thing1 =12;
console.log(typeof thing1)

let thing2 ="Number";
console.log(typeof thing2)

let thing3 ={};
console.log(typeof thing3)

let thing4 =[];
console.log(typeof thing4)
console.log(typeof thing4 === "object" && thing4.hasOwnProperty("length"))

let thing5 ={};
console.log(typeof thing5)
console.log(typeof thing5 === "object" && thing5.hasOwnProperty("length"))
let animal = "cat"
if (animal === "cat") {     
var job = "cat herder" } 
else {     
var job = "dog catcher" }
console.log(job)

let animal1 = "cat"
let job = animal1 ==="cat"? "cat herder": "dog catcher"
console.log(job)

var logState = true; 
if (logState = true) {     
console.log("The state is true"); 
} 

if (logState) console.log("The state is true"); 
if (true) {console.log("The state is true");  }  

