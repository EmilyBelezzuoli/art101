// Lab 7: Functions
// Author: Emily Belezzuoli
// Date: May 2, 2024

// Creating a function that takes user input and sorts the letters of their name

// function sortUserName() {
    
//     let userName = window.prompt("Hi. Please tell me your name so I can fix it.");
//     console.log("userName =", userName);
//     // split string to array
//     let nameArray = userName.split('');
//     console.log("nameArray = ", nameArray);
//     //sort the array
//     let nameArraySort = nameArray.sort();
//     console.log("nameArraySort =", nameArraySort);
//     //join array back to a string
//     let nameSorted = nameArraySort.join("");
//     console.log("nameSorted =", nameSorted);
//     return nameSorted;

//     // output-
// document.writeln("Oh hey, I've fixed your name: ", 
//     sortUserName(), "</br>");
 
//bonus task five
    function sortUserName(userName) {   
     
    console.log("userName =", userName);
    // split string to array
    let nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    //sort the array
    let nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    let nameSorted = nameArraySort.join("");
    console.log("nameSorted =", nameSorted);
    return nameSorted;

    }

    let userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    sortUserName(userName)

    //output 
document.writeln("Oh hey, I've fixed your name: ", 
sortUserName(userName), "</br>");