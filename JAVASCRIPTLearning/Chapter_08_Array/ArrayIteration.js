let arr = [1,2,3,4,5,'Revathi']

console.log(arr.slice(-3))

console.log("**********************************************************************")
for (let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

console.log("**********************************************************************")

for(let test of arr) //Value
{
    console.log(test)
}


for(let test in arr) //index
{
    console.log(test)
}


console.log("**********************************************************************")

arr.forEach((test1,index)=>{
    console.log(`${index}: ${test1}`) //index and vaue using foreach
})
console.log("**********************************************************************")

for(let[index,test2] of arr.entries())
{
console.log([index,test2])
}
console.log("**********************************************************************")