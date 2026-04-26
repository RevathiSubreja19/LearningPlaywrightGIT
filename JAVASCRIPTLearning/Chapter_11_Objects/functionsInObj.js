const calc =
{
    val:0,
    add(n)
    {
        this.val+=n;
        return this;
    },
    sub(n)
    {
        this.val-=n;
        return this;
    }
}

console.log(calc.add(5).sub(2));
console.log(Object.keys(calc));
console.log(Object.values(calc));
console.log(Object.entries(calc));

//Object.keys(emp)
//Object.values()
//Object.entries()
console.log('val' in calc)
console.log('----------------')
for(let i in calc)
{
    console.log(`${i}: ${calc[i]}`)
}
console.log('----------------') 