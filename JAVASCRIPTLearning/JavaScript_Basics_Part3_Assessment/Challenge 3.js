// <!-- Normalize Locator Error Messages
// Given a raw Playwright error message string, write a function that 
// trims extra spaces, converts the message to lowercase, collapses 
// multiple spaces into a single space, and prints a category. 
// Use `TIMEOUT` if the normalized message contains `"timeout"`, 
// `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`. -->



function challenge3(rawMessage){
    // trim, collapse consecutive whitespace, and lowercase
    let normalized = rawMessage.trim().replace(/\s+/g, ' ').toLowerCase()
    console.log(`Normalized: ${normalized}`)

    if (normalized.includes('timeout'))
        console.log('Category: TIMEOUT')
    else if (normalized.includes('locator'))
        console.log('Category: LOCATOR')
    else
        console.log('Category: GENERAL')

    return normalized
}

console.log(challenge3(" Locator not found after  TIMEOUT "))