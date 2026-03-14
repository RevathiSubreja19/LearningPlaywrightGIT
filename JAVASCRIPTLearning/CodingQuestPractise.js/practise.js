function isPalindrome(str)
{
//let str = "Revathi";
let j = str.length-1
for(let i=0;i<str.length-1;i++)
{
    if(str[i] !== str[j])
    {
        return false
    }
    j--
}

return true
}

console.log(isPalindrome("Revathi"))
console.log(isPalindrome(1010010))
console.log(isPalindrome("vigadadadagiv"))