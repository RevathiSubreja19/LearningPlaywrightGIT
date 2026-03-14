

// results = [
//     {name: "open login", status: "passed", durationMs: "400"},
//     {name: "fill failed", status: "failed", durationMs: "700"},
//     {name: "open login", status: "skipped", durationMs: "400"}
// ]



function challenge1(results)
{
    console.log("Total steps: "+ results.length)

        const summary = results.reduce((acc, test) => {
  acc[test.status]++;
  acc.totalDuration += Number(test.durationMs);
  if (test.status === "failed")
     {
    acc.failedTests.push(test.name);
  }
  return acc;
}, { passed: 0, failed: 0, skipped: 0, totalDuration: 0, failedTests: [] });

return summary

}

console.log(challenge1([
    {name: "open login", status: "passed", durationMs: "400"},
    {name: "fill failed", status: "failed", durationMs: "700"},
    {name: "open login", status: "skipped", durationMs: "400"}
]))




