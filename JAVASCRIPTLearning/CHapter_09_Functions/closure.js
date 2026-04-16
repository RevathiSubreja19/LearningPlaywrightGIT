function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
    
return inner;
}


outer()();



//  inner() not allowed!