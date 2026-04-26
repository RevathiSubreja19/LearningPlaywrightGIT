//Interface for test hook functions

interface testHook
{
(testName:string):void
}

let beforeHook:testHook = function (testName)
{
console.log("[BEFORE] SettingUp:"+testName);
}

interface TestCase
{
    id:number;
    name:string;
    status:string;
    duration:number
}

let test1:TestCase =
{
    id:1,
    name: "Login with invalid password",
    status: "FAIL",
    duration: 3200
};

let test2:TestCase = 
{
    id:2,
    name:"Login with valid credentials",
    status:"PASS",
    duration: 1500
};



let afterHook:testHook = function (testName)
{
console.log("[AFTER] Teardown:"+testName);
}

beforeHook("Login Test");
console.log("TC-"+test1.id+":"+test1.name+"-> "+test1.status+"ed in duration:"+test1.duration);
console.log("TC-"+test2.id+":"+test2.name+"-> "+test2.status+"ed in duration:"+test2.duration);
afterHook("Logoff Test ");