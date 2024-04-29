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
document.writeln(" my transportation: ",mytransport,"<br>"); 

document.writeln(" My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");