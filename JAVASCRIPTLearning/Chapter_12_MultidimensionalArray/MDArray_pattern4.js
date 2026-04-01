//*****
// ***
//  *
let n=3;
for(let i=n;i>=1;i--){
    let row = " ";
for(let j=n-i;j>=1;j--)
{
    row = row+ " "
}
for(let j=1;j<=2*i-1;j++)
{
row =row+"*"
}
console.log(row)
}
