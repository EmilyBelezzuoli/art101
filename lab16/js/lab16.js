// Lab 16 - JSON + APIs
// lab.js - use JSON + APIs
// Requirements: jQuery must be loaded for this script to work
// Author: Emily Belezzuoli
// Date: June 6, 2024


    URL = "https://xkcd.com/info.0.json"

    //attach w click
    $("#action").click(function() {

  // Using the core $.ajax() method\
  $.ajax({

 
    // The URL for the request (from the api docs)
    url: URL,
    // The data to send (will be converted to a query string)
            // here is where any data required by the api 

    // Whether this is a POST or GET request
    type: "GET",
  
//succeeds
})
  .done(function(data) {
    console.log(data);
    var printableDate = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
      //make JSON printable
      var printableData; "<pre>"; JSON.stringify(data, null, 2) + "</pre>";

      $("#title").html(data.title);
      $("#output").append("<img src=" + data.img + ">");
      $("#output").append("<p>" + data.explanation);
  
    })

})
