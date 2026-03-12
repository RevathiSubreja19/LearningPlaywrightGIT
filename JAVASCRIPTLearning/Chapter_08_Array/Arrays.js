// let test1 = []
// let test2 = new Array(3);
// let test3 = new Array(1,2,3)
// let test4 = [1,2,3,4,5]
// let test5 = ["Apple","Orange"]
// let test6 = ["Apple","Orange",'Pineapple',"Apple"]
// let test7 = ["R","E","V","A","T","H","I"]
// let test8 = ['R','1','$',"MixVal"]

// console.log(test1)
// console.log(test2)
// console.log(test3)
// console.log(test4)
// console.log(test5)
// console.log(test6)
// console.log(test7)
// console.log(test8)

// Array.from

// console.log(Array.from("Revathi"))

// console.log("**************************************************************")
//let test9 = "Revathi Subreja"
// for(let i=0; i<test9.length; i++)
// {
//     console.log(test9[i])
// }

// Array.from(test9).forEach(char => {
//     console.log(char);
// });

// test4.splice(2,2,6,7,8,9,0,2)
// console.log(test4)
// console.log(test4.indexOf(2))


// const fruits = [1, 2, 3, 4];
// fruits.push(5,6,7,8,9);
// console.log(fruits)
// const index1 = fruits.indexOf(1); // index1 is 1
// const index2 = fruits.indexOf(2); 
// console.log(index1)
// console.log(index2)



 let test10 = [10,2,5,3,4,6,7,56,77,99]


// console.log(test10.findIndex(x=>x>10))

// let a =['My','name','is', 'Revathi']
// let s = a.join(' ')
// console.log(s)

// console.log(Array.from(test9))
// for(let i=0;i<test9.length;i++)
// {
// console.log(test9.charAt(i))
// }

console.log(test10.map(x=>x*10))
console.log(test10.map(x=>x<=10?"Pass":"Fail"))
console.log(test10.filter(x=>x<10))
console.log(test10.reduce((sum,s)=>sum+s,0))