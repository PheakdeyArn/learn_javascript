setInterval(function(){

    // create some variable
    var currTime = new Date();
    var hours = currTime.getHours();
    var minutes = currTime.getMinutes();
    var seconds = currTime.getSeconds();
    var period = "AM";

    if (hours >= 12)
    {
        period = "PM";
    }
    if (hours > 12)
    {
        seconds = "0" + seconds;
    }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    
    // create variable that store all variable represent the clock
    var clockTime = hours + " : " + minutes + " : " + seconds + " : " + period;

    var clock = document.getElementById("clock");
    clock.innerHTML = clockTime;
}, 1000 );