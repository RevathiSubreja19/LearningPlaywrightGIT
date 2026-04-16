let x = new Promise(function(resolve,reject)
{
reject("test")
})

x.then(function(param){
    console.log("Pass:"+param)
}).catch(function(param){
    console.log("Fail:"+param)
}).finally(function(){
    console.log("Default text")
})