//Callback 
jQuery.get("https://httpbin.org/get?data=1", function(response){
  jQuery.get("https://httpbin.org/get?data=1", function(response){
    jQuery.get("https://httpbin.org/get?data=1", function(response){
    });
  });
});

//Promis
axios
  .get("https://httpbin.org/get")
  .then(function(response) {
    // now I have some data

    return axios.get("https://httpbin.org/get");
  })
  .then(function(response) {
    // now I have some data

    return axios.get("https://httpbin.org/get");
  });

//Async/Await
async function getLotsOfThings (){
  var response1 = await axios.get("https://httpbin.org/get");
  var response2 = await axios.get("https://httpbin.org/get");
  var response3 = await axios.get("https://httpbin.org/get");
}