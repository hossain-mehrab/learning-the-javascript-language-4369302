let testObject = {
  key1 : "Mango",
  key2 : "Banana"
};
console.log(testObject);
console.log(Object.keys(testObject).length); //Find Object keys Length
console.log(Object.keys(testObject.key1).length); //Find Object Child keys Length


const testObj2 = {
  "My Name" : "Mehrab",
  "My Age" : 20
};
console.log(testObj2); 
console.log(Object.keys(testObj2).length); //Find Object Length


let testObject2 = {
  key1 : "Mango",
  key2 : "Banana"
};
console.log(testObject2);
console.log(Object.keys(testObject2).length); //Find Object keys Length
console.log(Object.keys(testObject2.key1).length); //Find Object Child keys Length
console.log(testObject2.key1);
console.log(testObject2.key3 = "Apple");
console.log(testObject2);
console.log(delete testObject2.key1);
console.log(testObject2);
console.log(testObject2["key1"]);


//Reference Vs Copy
///Reference
   // animal = animal2
///Copy
  //1. animal2 = Object.assign({}, animal);
  //2. animal2 = { ...animal };
  //3. animal2 = JSON.parse(JSON.stringify(animal));

let animal1 = {
  key1 : "Value1",
  key2 : "Value2",
  Key3 : "Value3",

};

let animal2 = animal1

//Reference: Saving same valu of two different veriable in a same location 
console.log(animal1);
console.log(animal2);
console.log(animal2.key4 = "Value4");
console.log(animal1);
console.log(animal2);

//shallow Copy: Saving same valu of two different veriable into two different location
console.log(animal3 = Object.assign({}, animal1));
console.log(animal3.Key5 = "Value5");
console.log(animal4 = {...animal1});

//Deep Copy
console.log(animal5 = JSON.parse(JSON.stringify(animal1)));


