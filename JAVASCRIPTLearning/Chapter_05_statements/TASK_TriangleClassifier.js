let sideA = 3;
let sideB = 4;
let sideC = 5;  

if (sideA === sideB && sideB === sideC) {
    console.log("The triangle is equilateral.");
}

else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("The triangle is isosceles.");
}   
else {
    console.log("The triangle is scalene.");
}