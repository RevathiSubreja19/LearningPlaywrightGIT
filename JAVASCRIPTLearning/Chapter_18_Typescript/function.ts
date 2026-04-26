let x:number[] = [32345,5,1,333,66,6,2,34335,0,4,11,65]

let z =(a:number,b:number):number=> a-b;

console.log(z(8,15))


// void function 
function print (msg:String):void {
    console.log(msg);
}

print("My name is Revathi")

function greet(name:string):string
{
return `Hello, ${name}!`
}

console.log(greet("Revathi"))

//filter method using typescript 

let responseCode:number[] = [200,201,404,500,302,403];

function getFailedCodes(code:number[]):number[]
{
 return code.filter(x=> x>=400);
}

console.log(getFailedCodes(responseCode));