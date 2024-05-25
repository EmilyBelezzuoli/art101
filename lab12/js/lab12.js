// Lab 12 - Conditionals
// lab.js - create a function that depends on conditionals
// Requirements: jQuery must be loaded for this script to work
// Author: Emily Belezzuoli
// Date: May 21, 2024

function sortingHat(str) {
  let length = str.length;
  const numOfHouses = 4;
  let remainder = length % numOfHouses;
  if (remainder == 0) {
    return ("Snarflebpuff");
  } else if (remainder == 1) {
    return ("GlynethPaltrow")
  } else if (remainder == 2) {
    return "SlitheringSnake";
  } else {
    return "Paramour";
  }
}

// const house = sortingHat("azad azizyan");
// console.log(house)

let myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
let name = document.getElementById("input").value;
let house = sortingHat(name);
newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
document.getElementById("output").innerHTML = newText;

})