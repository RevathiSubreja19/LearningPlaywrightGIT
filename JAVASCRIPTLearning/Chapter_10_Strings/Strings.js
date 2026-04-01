let str = "revathi"
let str2 = str.repeat(2)
console.log(str2)

let padstr = str.padStart(5,'*')
console.log(padstr)

console.log("-------------------------")

let env = "staging"; 
let module = "auth"; 
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(4, "0")}`;
console.log(testId)

console.log("-------------------------")

 let actual = " PASS "; let expected = "pass"; 
 console.log(actual.trim().toLowerCase() === expected);
 console.log("-------------------------")

 let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked)
