for (let i = 0; i<10; i++){
  console.log(i);
}

//Matching page title
let pageTitle = [
  "Home",
  "Service",
  "Products",
  "Career",
  "News"
]
console.log(pageTitle);

// for (i = 0; i<pageTitle.length; i++){
//   if (document.title === pageTitle[i]){
//     console.log ("This is" + " " + pageTitle[i] + " " + "page");
//   } 
//   else 
//   {
//     console.log ("This is not" + " " + pageTitle[i] + " " + "page");
//   }
// }

for (i = 0; i<pageTitle.length; i++){
  let currentPage = pageTitle[i];

  if (document.title === currentPage){
    console.log ("This is" + " " + currentPage + " " + "page");
  } 
  else 
  {
    console.log ("This is not" + " " + currentPage + " " + "page");
  }
}



