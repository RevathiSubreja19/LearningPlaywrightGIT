import {BaseURL as url_dev,basefunc,employee,testcase} from "./base.js"
import {BaseURL as url_QA} from "../Chapter_14_Promise/base2.js"

console.log(url_dev)
console.log(url_QA)
console.log(basefunc("Practising export functionality"))    
console.log(employee)


console.log("----------------------------------------------------------")

let obj = new testcase("Login")
console.log(obj.name)
console.log(obj.run())
console.log(obj.getStatus())
