// Lab 8: Functions
// Author: Emily Belezzuoli
// Date: May 4, 2024


    
function isEven (x){ 
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 73, 4, 12, 38, 122, 200001]
console.log("My array", array);

let result = array.map(isEven);
// should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", result)

let results = array.map(function(x){
    return x ** 0.5;
    })
// should return
console.log("Squareroot of array:", results);

//     // output-
// document.writeln("Oh hey, I've fixed your name: ", 
//     sortUserName(), "</br>");x