// command to ensure that the Javascript does not run until all of the HTML has rendered 
$(document).ready(function() {
  // when the save button is clicked
  $(".saveBtn").on("click", function() {
    // get the value that was entered into the description
    var value = $(this).siblings(".description").val();
    // get the value of the time that is the parent value of the description
    var time = $(this).parent().attr("id");

    // save the values in localStorage
    localStorage.setItem(time, value);
  });

  // Create a function hourUpdater that if empty will perform the following
  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks of the day and will perform the following
    $(".time-block").each(function() {
      // define the variable blockHour as getting the integer value of the hour ID
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        // if the conditional is true, add the integer value of the hour ID to the past class
        $(this).addClass("past");
      } 
      // if the block hour and current hour are equal to each other both in type and value
      else if (blockHour === currentHour) {
        // remove the integer from the past class
        $(this).removeClass("past");
        // add the integer to the present class
        $(this).addClass("present");
      } 
      // if neither of the two conditions listed above are true,
      else {
        // remove the integer from the past class
        $(this).removeClass("past");
        // remove the integer from the present class
        $(this).removeClass("present");
        // add the integer to the future class
        $(this).addClass("future");
      }
    });
  }
  // call the function hourUpdater to run
  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

// Added feature will be the current time right below the date
  $("#currentTime").text(moment().format("hh:mm"));
