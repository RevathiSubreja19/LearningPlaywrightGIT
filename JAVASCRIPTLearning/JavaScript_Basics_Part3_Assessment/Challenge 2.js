//let name = ["Amit Kumar","Neha Singh"], roles = ["admin", "viewer"]


function challenge1(name,roles)
{

   let userName = name.map(a => a.toLowerCase().replaceAll(" ","_"))
   let email = userName.map(a => `${a}@playwrightbatch.com`)
   const usersArray = userName.map((username, index) => {
   return {
    username: userName[index],
    email: email[index],
    roles: roles[index]
  }; 
})
return usersArray
}

console.log(challenge1(["Amit Kumar","Neha Singh"],["admin", "viewer"]))