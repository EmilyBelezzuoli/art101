console.log("Hello from index.js");

function getNameAndDisplay() {
    //prompt user to input their name
    let name = prompt("Name please:");
    //use this input to change the text of the h1 using
    $("#title").html("Hello, " + name);
}

// $("#my-button").click(getNameAndDisplay)

$("#my-button").click(getNameAndDisplay);
// $("#my-button").click(function(){
//     console.log("click")
// });
