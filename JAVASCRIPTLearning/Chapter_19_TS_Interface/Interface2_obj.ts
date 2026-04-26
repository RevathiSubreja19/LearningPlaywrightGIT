//readonly - cant modify & readonly
// ? - optional

interface Response
{
readonly statuscode:number;
body:object;
header?:string;
respnseTime?:number;
}
let response:Response =
{
statuscode : 202,
body: {firstname:"Revathi", lastname: "Subreja"},
header: "Self"
}

console.log(response.statuscode);
console.log(response.body);
console.log(response.header);
