function x (arg1,callback)
{
    console.log("outside function: "+arg1)
    callback()}

function y(){
        console.log("callback function")    }

x("argument val",y)
x("arg",function(){
    console.log("anonymous function")
})

x("arg",()=> {
    console.log("arrow function")
})

