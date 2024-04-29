// Lab 5: Data Types and Variables
// Declaring and Outputting Variables
// Author: Emily Belezzuoli
// Date: April 26, 2024

// Declare Variables
let carMake = "MiniCooper";
let carModel = "Hardtop 2 Door";
let carYear = 2022;
let carColor = "Grey and blue";
let ownIt = true;
let currentYear = 2024;
let carAge = currentYear-carYear;


// Output Variables
document.writeln("Car make: " + carMake + "<br>");
document.writeln("Car model: " + carModel + "<br>");
document.writeln("Car year: " + carYear + "<br>");
document.writeln("Car color: " + carColor + "<br>");
document.writeln("Car age: " + carAge + "<br>");

document.writeln("Car Make: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");