//EXPORT VARIABLES
export let BaseURL = "app.vwo.com"

//EXPORT FUNCTIONS
export function basefunc(print)
{
    return print
}

//EXPORT OBJECTS
export let employee = {
    name: "Revathi",
    age: 31,
    marital_status: "married",
    Employment: "IT",
    Location: "Chennai",
    phone: 8939681780
}

//EXPORT CLASSESS
export class testcase 
{
     name
    constructor(name)
    {
        this.name = name;
    };
    run()
    {
        console.log("[RUN] "+this.name)
        return "Class ran successfully"
    };
    getStatus()
    {
        return "PASS";
    };

}