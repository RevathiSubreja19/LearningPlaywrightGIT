let employee = {
    name: "Revathi",
    age: 31,
    marital_status: "married",
    Employment: "IT",
    Location: "Chennai",
    phone: 8939681780
}

// console.log(employee["name"]);
// console.log(employee.age = 32 );

employee.Experience = 10
employee.Location= "Tirunelveli",
console.log(employee);
delete employee.phone
console.log(employee);

// let obj = {};
// obj.config = "text"
// obj.browser = "chrome"
// obj.timeout = 5000

// console.log(obj)
// delete obj.config

// console.log(obj)
console.log('age ' in employee)
// console.log(employee.hasOwnProperty('tegts'))

// for(let i in employee)
// {
//     console.log(`${i}: ${employee[i]}`)
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// for(let r in employee)
// {
//     console.log(`${r}: ${employee[r]}`)
// }