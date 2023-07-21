// //Sequential for loop 
// for (let i = 0; i<10; i++){
//   console.log(i);
// }

// //Matching page title
// ///Sequential for loop 
// let pageTitle = [
//   "Home",
//   "Service",
//   "Products",
//   "Career",
//   "News"
// ]
// console.log(pageTitle);

// for (i = 0; i<pageTitle.length; i++){
//   if (document.title === pageTitle[i]){
//     console.log ("This is" + " " + pageTitle[i] + " " + "page");
//   } 
//   else 
//   {
//     console.log ("This is not" + " " + pageTitle[i] + " " + "page");
//   }
// }


// for (i = 0; i<pageTitle.length; i++){
//   let currentPage = pageTitle[i];

//   if (document.title === currentPage){
//     console.log ("This is" + " " + currentPage + " " + "page");
//   } 
//   else 
//   {
//     console.log ("This is not" + " " + currentPage + " " + "page");
//   }
// }

// //Enumerative for loop use for Array and Objects
// ///Iterate over an Array
// let pageTitle1 = [
//   "Home",
//   "Service",
//   "Products",
//   "Career",
//   "News"
// ]
// console.log(pageTitle1);

// for (let p in pageTitle){      //for..in Loop (Drive the key of the object or Array)
//   console.log(p, pageTitle[p]);
// }

// for (let v of pageTitle){      //for..of Loop (Drive the value of the object or Array)
//   console.log(v);
// }


// ///Iterate over an Object
// let pageTitle2 = {
//   first : "Home",
//   second : "Service",
//   third : "Career",
//   fourth : "News"
// }
// console.log(pageTitle2);

// for (let p in pageTitle2){
//   if (pageTitle2.hasOwnProperty (p))
//   {
//     console.log(p, pageTitle2[p]);
//   }
// }


// //SET and MAPS are special types of "Object"
// let myList = [1,1,2,3, "Mehrab"];
// console.log(myList);

// ////SET behave like Array
// let mySet = new Set();
// mySet.add(4);
// mySet.add(4); //Set auto remove double/same properties
// mySet.add(5);
// mySet.add(6);
// mySet.add("Hossain");
// console.log(mySet);

// mySet2 = new Set (myList); //Copy Array into Set and auto remove double properties
// console.log(mySet2);

// for (let m of mySet){
//   console.log(m);
// }

// //MAPS behave like Object
// let myObj = {
//   first : "Bird",
//   second : "Men",
//   third : "Women"
// }

// console.log(myObj);

// let myMap = new Map();
// myMap.set("first","PCB");
// myMap.set("second","BD");
// myMap.set("third","TT");
// console.log(myMap);
// console.log(myMap.get("first"));
// console.log(myMap.has("first"));

// for (let map of myMap){
//   console.log(map);
// }
// console.log(myMap.entries());
// console.log(Object.entries(myObj));

// let myMap1 = new Map(Object.entries(myObj));
// console.log(myMap1);


// for loop
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

// same thing as a while loop
let i = 0;
while (i < 10) {
  console.log(i + "... This will go until we hit 10");
  i += 1;
}

var myList = [true, true, true, false, true, true];

var myItem = null;

while (myItem !== false) {
  console.log(
    "myList has " +
      myList.length +
      " items now. This loop will keep going until we pop a false."
  );
  myItem = myList.pop();
}

var counter = 1; //Forever loop
while (true) {
  console.log(counter);
  counter++;
  break; // comment out this break statement to make this loop go forever and potentially lock up your web browser
}


var myList = [true, true, true, false, true, true];

var myItem = false;
do {
  console.log(
    "myList has " +
      myList.length +
      " items now. This loop will go until we pop a false."
  );
  myItem = myList.pop();
} while (myItem !== false);

