// Lab 6: Javascript Arrays and Objects
// Author: Emily Belezzuoli
// Date: April 26, 2024

// Define Variables
mytransport = ["car", "walk", "bus", "rides from friends"];


// create an object for my main ride
myMainRide = {
    make: "Mini",
    model: "Cooper Hardtop",
    color: "grey",
    year: 2022,
    age: function() {
        return 2024 - this.year;
    }
}

    // output-
document.writeln(" my transportation: ",myTransport,"<br>"); 

document.writeln(" My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

    document.writeln("Car make: " + carMake + "<br>");
document.writeln("Car model: " + carModel + "<br>");
document.writeln("Car year: " + carYear + "<br>");
document.writeln("Car color: " + carColor + "<br>");
document.writeln("Car age: " + carAge + "<br>");
document.writeln("Car Make: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");