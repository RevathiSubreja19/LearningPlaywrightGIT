enum Browser
{
    chrome = "CHROME",
    firefox = "FIREFOX",
    edge = "EDGE",
    safari = "SAFARI"
}

function launchBrowser(browser:Browser):void
{
    switch(browser)
    {
        case Browser.chrome: console.log("Launching Chromium"); break;
        case Browser.firefox: console.log("Launching Firefox"); break;
        case Browser.edge: console.log("Launching Edge"); break;
        case Browser.safari: console.log("Launching Safari"); break;
    }
    }

launchBrowser(Browser.chrome)