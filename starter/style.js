$(document).ready(function() {

    // Display the current date and time at the top of calendar
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // Create timeblocks for standard business hours using a for loop
    var currentTime = moment().hour();
    
    for (var i =9; i < 18; i++) {
        // create div for each timeblock
        timeBlock = $("<div>");
        timeBlock.addClass("row time-block");

        // create div for the hour
        var hourDiv = $("<div>");
        hourDiv.addClass("hour col-md-2");
        hourDiv.text(i + ":00");
        timeBlock.append(hourDiv);

        // create a text area for the event
        var eventTxt = $("<textarea>");
        eventTxt.addClass("col-md-8 description");
        timeBlock.append(eventTxt);

        // create a save button
        var saveBtn = $("<button>");
        saveBtn.addClass("col-md-2 saveBtn");
        timeBlock.append(saveBtn);

        // append timeblock to the container
        $(".container").append(timeBlock);

        // If the timeblock is in the past, add the past class
        if (i < currentTime) {
            eventTxt.addClass("past");
        }
        // If the timeblock is in the present, add the present class
        else if ( i === currentTime ) {
            eventTxt.addClass("present");
        
        }
        // If the timeblock is in the future, add the future class
        else if (i > currentTime) {
            eventTxt.addClass("future");
        }
    }

    // Add an event listener to the save button
    $(".saveBtn").on("click", function() {
        var event = $(this)
        .siblings(".description")
        .val();

        var hour = $(this)
        .siblings(".hour")
        .text()

        localStorage.setItem(hour, event);
    });

    // Get the value of the textarea
    
    // Get the hour of the timeblock
    
    // Save the event to local storage

    // Retrieve events from local storage and display them on the corresponding timeblocks








})
