abstract class basetest
{
    protected testName:string

    constructor(testName:string)
    {
        this.testName = testName;
    }

    abstract setup():void;
    abstract execute():void;
    abstract teardown():void;
}

class UITest extends basetest
{
    setup():void
    {
       console.log("Setup: Launch browser");
    }
    execute():void
    {
       console.log("Execute: Click buttons,fill forms");
    }
    teardown():void
    {
       console.log("Teardown: Close browser");
    }
}