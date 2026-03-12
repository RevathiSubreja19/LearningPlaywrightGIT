// Exercise 1 : API Response Validation
// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)
// Find the FIRST non-success code
// Return all unique error codes
 let responses = [200, 201, 404, 500, 404, 200, 503];

 for(let i=0;i<responses.length;i++)
 {
    if((responses[i]>=200) && (responses[i]<=299))
    { console.log(`${responses[i]} : Responses is successfull`)}

    else 
    { console.log(`${responses[i]} : Responses is not successfull`)}

    
 }
 console.log("FIRST NON-Sucess code is " + responses.find(s=> s>299))