let results:string[] =  ["PASS", "FAIL", "PASS", "PASS", "FAIL"];

function passedCount(res:string[]):number{

    let count:number = 0;
    for(let i=0;i<res.length;i++)
    {
        if (res[i]==="PASS") count++;
    }
    return count;

}

console.log("PASSED: "+passedCount(results)+"/"+ results.length);
console.log("Failed: "+(results.length - passedCount(results)) +"/"+ results.length);