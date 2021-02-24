// create some variable to store user input
var month = document.getElementById("user-month");
var day = document.getElementById("user-day");
var year = document.getElementById("user-year");

var submitBtn = document.getElementById("submit-date");

// create anonymous function 
// reference to submit variable
// and attach event handler to the button
submitBtn.addEventListener("click", function(evt)
{
    // create message to get the result id
    let message = document.getElementById("message");
    
    // create variables that get the value by parsed by user input
    let parsedMonth = parseInt(month.value) - 1; // array start form 0 so user input 1 => 1 - 1 = 0 == arr[0] = "Janaury" 
    let parsedDay = parseInt(day.value);
    let parsedYear = parseInt(year.value);

    let months = [
                    "January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"                    
                ];

    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // create a variable to strore all the date
    let dateIs = new Date(parsedYear, parsedMonth, parsedDay);

    let weekdayIs = weekdays[dateIs.getDay()];
    let monthIs = months[parsedMonth];

    if (weekdayIs === undefined || monthIs == undefined)
    {
        message.innerText = "";

        setTimeout(function()
        {
            message.innerText = "Please enter a valid date.";
        }, 500)
    }
    else
    {
        message.innerText = weekdayIs + ", " + monthIs + " " + parsedDay + ", " + parsedYear;
    }

})
