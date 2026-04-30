let x = new Promise(function(resolve,reject)
{
    // resolve("Success")
    reject("Failure")
})

x.then(function(param)
{
console.log("Resolve message: "+param)
}).catch(function(param)
{
console.log("Reject message: "+param)
}).finally(function(){
    console.log("Print anyways")
})



let x = [1,2,3,4,5,6]

x.forEach(function(result,index)
{
    console.log(`Index ${index}: ${result}`)
})
