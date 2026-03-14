// let StringTest = "123"
// let StringReverse


// for(let j= StringTest; j<StringTest.length-1;j--)

// {
//    let rev = StringTest.charAt(j)
//     console.log(rev)

// }

function isPalindrome(str) {
    let j = str.length -1
    for (let i = 0; i < str.length-1; i++) 
        {
        if (str[i] != str[j]) 
        {                                    //str[0]  str[6] => r r    r a
            console.log("Not a palindrom")
            return false;           
            break;                           //str[1]  str[5] => a a    a m
        }                                    //str[2]  str[4] => c c    m a
        j--;                                 //str[3]  str[3] => e e    a r
    }                                        //str[4]  str[2] => c c
    
    console.log("Palindrom")   
    return true;        

}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));