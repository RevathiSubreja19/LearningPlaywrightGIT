function test(name:string):string{
    return `Hi! ${name}`
}

console.log(test("Revathi"));

function test1(input:any):any{
    return `Hi! ${input}`
}
console.log(test1("Revathi"));
console.log(test1(1.01));

function test2<T>(input:T):string{
    return `Hi! ${input}`
}
console.log(test1("Revathi"));
console.log(test1(1.01));