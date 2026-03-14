// Browser Execution Planner
// You have an array of all supported browsers and another
//  array of temporarily blocked browsers. Write a function
//  that returns the runnable browsers, the blocked browsers, 
// and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

//let allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]

function challenge4(allBrowsers,blockedBrowsers)
{
    let runnableBrowsers = allBrowsers.filter(b => !blockedBrowsers.includes(blockedBrowsers));
    console.log(`runnable: ${runnableBrowsers}`)
    console.log(`blocked: ${blockedBrowsers}`)
    runnableBrowsers.join(blockedBrowsers)
    console.log(`plan: "Run on: ${runnableBrowsers} | Skip: ${blockedBrowsers}"`)
    return true
}

console.log(challenge4(["chromium", "firefox", "webkit"],["firefox"]))