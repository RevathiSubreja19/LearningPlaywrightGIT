let name1:String = "Revathi";
console.log(name1)
let numb:Number = 123;
console.log(numb)

function sum (a:number,b:number):number
{
    let z:number = a+b;
    return z;
}

console.log(sum(5,7))

//Primitive datatypes

let name2:String = "Revathi Subreja";
let number:Number = 1234;
let pi:Number = 3.14; //float
let bool:Boolean = true;
let nothin:null = null;
let undef:undefined = undefined;

//Arrays

let arr:number[] = [1,2,3,4,5];
let arr1:String[] = ['My','name','is','Revathi'];
let arr2:Array<String> = ['My','name','is','Subreja'];
let anything:any = "hello";   // Please avoid mostly
let unknw:unknown = "hello"; // Better than any datatype
let arr3:unknown[] = ["1","Revathi","1.52"]

console.log(arr3 )