let apicall = new Promise(function(resolve,reject)
{
   // resolve("200")
    reject("Server Error")
})
apicall.then(function(data){
    console.log("Created - "+data)})
    .catch(function(error){
        console.log("Error thrown - "+error)})
        .finally(function(){
        console.log("Default print")})
    