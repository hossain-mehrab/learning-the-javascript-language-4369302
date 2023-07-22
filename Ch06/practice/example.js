//Simple functions
function number (){
  console.log("Hossain");
  console.log("Md Mehrab");
}
console.log(number());

//Make a replace function 
function repLs (letter){
  if (typeof letter !== "string"){
    console.error("Could not find replacing letter!")
    return;
  }
  else
  {
    letter = letter.replace(/r/g, "w");
    letter = letter.replace(/R/g, "W");
    return letter;
  }
}

//Even/Odd function 
function eveNum (numb){
  if(numb % 2 === 0){
    return true;
  }
  else
  {
    return false;
  }
}

// Agruments and Parameters
function spekSome (what = "How Many", howMany =10){
  for ( var i = 0; i<howMany; i++)
  {
    console.log(what + " "+i+ " ")
  }
}


// Agruments and Parameters
function addIng ()
{ 
  var total = 0;
  for (var i = 0; i < arguments.length; i++){
    var number = arguments[i];
    if (typeof number === "number"){
      total =total+number;
    }
  }
  return total;
}


//Object, references (Without copy and it will change the original object)
let calvin1 = {
  name1 : "calvin",
  bestFriend1 : "Hobbes",
  form1 : "human boy"
}

function transmogrifier1(calvin1){
  if (typeof calvin !== "object")
  {
    console.error ("Calvin is not human");
    return;
  }

  let randomNumber1 = Math.floor(Math.random()*5)+1;
  switch(randomNumber1){
    case 1:
      calvin1.form1 = "HH";
      break;
    case 2:
      calvin1.form1 = "TH";
      break;
    case 3:
      calvin1.form1 = "TT";
      break;
    case 4:
      calvin1.form1 = "MH";
      break;
    case 5:
      calvin1.form1 = "OH";
      break;
    default:
      calvin1.form1 = "Human Boy";
      break;
  }
}

//Object, references (Witht copy and it will change the original object)
let calvinNew = {
  name1 : "calvin",
  bestFriend1 : "Hobbes",
  form1 : "human boy"
}

function transmogrifier1Copy(calvinNew){
  if (typeof calvinNew !== "object")
  {
    console.error ("Calvin is not human");
    return;
  }

  let randomNumber1 = Math.floor(Math.random()*5)+1;
  let newForm1 = calvin1.form1;

  switch(randomNumber1){
    case 1:
      newForm1 = "HH";
      break;
    case 2:
      newForm1 = "TH";
      break;
    case 3:
      newForm1 = "TT";
      break;
    case 4:
      newForm1 = "MH";
      break;
    case 5:
      newForm1 = "OH";
      break;
    default:
      newForm1 = "Human Boy";
      break;
  }
  return{
    name1 : calvin1.name1,
    bestFriend1 : calvin1.bestFriend1,
    form1 : newForm1
  }
}

//Functions are object in JS
function speakSomething(what = 'Speaking!') {
  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
}

var speakSomething = function(what = 'Speaking!') {
  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
};

setTimeout(speakSomething, 5000);

var obj = {
  sayHello: function() {
    console.log("Hello");
  }
};

obj.sayHello();

//Scope in JS: Where variable is decleared and local and global var
if (!global && typeof window !== 'undefined') {
  var global = window;
}

var myNum = 32;
var myResult = "Success!";

function randomizer(limit) {
  var randomNumber = Math.floor(Math.random() * limit);

  var myNum = randomNumber;

  console.log("Local myNum is", myNum);
  console.log("Global myNum is", global.myNum);

  console.log("Our result is", myResult);

  return myNum;
}

randomizer(10);

function doubleIt(num) {
  var myNum = num * 2;

  return myNum;
}

if (1 === 1) {
  const oneIsOne = 'Yes indeed.';
  console.log('One is one, right?', oneIsOne);
}

console.log('One is still one, right?', oneIsOne); // ReferenceError

//Arrow Functions 
