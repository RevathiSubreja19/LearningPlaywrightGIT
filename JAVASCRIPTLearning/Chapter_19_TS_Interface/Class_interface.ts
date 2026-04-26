interface Executable
{
    name:string;
    run():void;
    getStatus():string;
} 

class testcase implements Executable
{
    name:string;
    constructor(name:string)
    {
        this.name = name;
    };
    run():void
    {
        console.log("[RUN] "+this.name)
    };
    getStatus():string
    {
        return "PASS";
    };

}

let obj:Executable = new testcase("Testcase name: Verify Login funcationality of app.vwo.com");
// console.log(obj.name);
obj.run();
console.log("Test Status: " +obj.getStatus());