// Lab 14 - Debugging tools and strategies
// lab.js - create a function that depends on conditionals
// Requirements: jQuery must be loaded for this script to work
// Author: Emily Belezzuoli
// Date: June 2, 2024


    URL = "https://api.nasa.gov/planetary/apod?api_key=qr9f0LJKqcoYrfdwgtGBfiBAclufuFckciPp1CFm"
    
    //attach w click
    $('#action').click(function() {

  // Using the core $.ajax() method\
  $.ajax({

  
    // The URL for the request (from the api docs)
    url: URL,
    // The data to send (will be converted to a query string)
            // here is where any data required by the api 

    // Whether this is a POST or GET request
    type: "GET",

//succeeds
});
  .done(function(data)) {
    console.log(data);
    var printableDate = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
      //make JSON printable
      var printableData; "<pre>"; JSON.stringify(data, null, 2) + "</pre>";

      $("#title").html(data.title);
      $("#output").append("<img src=" + data.url + ">");
      $("#output").append("<p>" + data.explanation);
  
    })
});