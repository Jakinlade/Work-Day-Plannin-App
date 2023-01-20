$(document).ready(function() {

    // Display the current date and time at the top of calendar
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // Create timeblocks for standard business hours using a for loop
    for (var i =9; i < 18; i++) {
        // create div for each timeblock
        timeBlock = $("<div");
        timeBlock.addClass("row time-block");

        // create div for the hour

        // create a text area for the event

        // create a save button

        // append timeblock to the container

        // Check the current time

        // If the timeblock is in the past, add the past class
     
        // If the timeblock is in the present, add the present class
      
        // If the timeblock is in the future, add the future class
    
        // Add an event listener to the save button
    
        // Get the value of the textarea
      
        // Get the hour of the timeblock
     
        // Save the event to local storage
 
        // Retrieve events from local storage and display them on the corresponding timeblocks
   







})
