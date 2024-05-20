// Lab 11 - JavaScript Events and Forms
// lab.js - This simple JS/jQuery script uses events/forms
// Requirements: jQuery must be loaded for this script to work
// Author: Emily Belezzuoli
// Date: May 20, 2024

function sortName(){
  let userName = $("#input-here").val()
  let sortedName = userName.split('').sort().join('');
  $("#output-name").html("Your name is:" + sortedName+"!");
};

$("#my-button").click(sortName);