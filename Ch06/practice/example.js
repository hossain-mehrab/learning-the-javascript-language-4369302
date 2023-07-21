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
