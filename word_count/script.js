// create a variable to store user input
// variable of function
var print = function(msg)
{
    document.getElementById("output").innerHTML = "Length is " + msg;
}

// find length of the word
document.getElementById("btn").onclick = function(event)
{
    print(document.getElementById('str').value.length);
}
