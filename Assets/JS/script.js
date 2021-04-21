// Add current date to class currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Color-code time blocks based on time to current time: past, present or future. 

function timeUpdate () {
    //check current 
    var currentHour = moment().hour();

    //pull time block
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(currentHour, blockHour);

        // loop - compare current time to time block to determing past, present, or future

        //check if hour is in the past
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } 
        //check if hour is in the present 
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        //check if hour is in the future
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    })
   
};

timeUpdate(); 

//Ability to add text to time block event

//Save text to local storage when save is selected

//Page refreshed events persist

