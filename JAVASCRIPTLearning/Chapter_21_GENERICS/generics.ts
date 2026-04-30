function getFirstResult(name: String): String
{
return name;
}

let x = getFirstResult("Revathi")

console.log(x)
console.log("------------------");


function getfirstgeneric<T>(results: T[]): T{
    return results[0]!;
}

let firstcode = getfirstgeneric<number>([1,0,3]);

console.log(firstcode)
