let string = "Revathi Subreja"


let count =0
for(let i=0;i<string.length-1;i++)
{
    count++
    i = string.indexOf('a',i+1)
}
console.log(`Number of occurance of the char 'a' is: ${count}`);
