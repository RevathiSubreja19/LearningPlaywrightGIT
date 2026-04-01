let multiarr = [
    [1,2,3,99],
    [4,5,6,99],
    [7,8,9,99]
];

for(let i=0;i<multiarr.length;i++)
{
    for(let j=0;j<multiarr[i].length;j++)
    {
        console.log(multiarr[i][j] )
    }
    console.log(" ")
}


for(let row of multiarr)
{
    for(let col of row)
    {
        process.stdout.write(col+ " ")
    }
    console.log(" ")
}

