// <!-- Normalize Locator Error Messages
// Given a raw Playwright error message string, write a function that 
// trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`. -->



function challenge3(rawMessage){

let rawMes = rawMessage.trim()
//console.log(rawMes)
let NormalizedMessage = rawMes.toLowerCase()
console.log(`Normalized: ${NormalizedMessage}`)

if(NormalizedMessage.includes("timeout"))
    console.log("Category: TIMEOUT")
else if(NormalizedMessage.includes("locator"))
    console.log("Category: LOCATOR")
else 
    console.log("Category: GENERAL")

return true
}

console.log(challenge3(" Locator not found after TIMEOUT "))