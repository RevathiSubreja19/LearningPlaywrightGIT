// let c = "rev"
// console.log(typeof(c))

function callbckeg(testname,callback)
{
console.log("The name of the test: "+testname);
return callback();
}

function callback()
{
    return "The function  is completed"

}

console.log(callbckeg("LoginTest",callback))
