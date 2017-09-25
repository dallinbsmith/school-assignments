var modal = document.getElementById('myModal');

var btn = document.getElementById("submission");

var fnameone = document.getElementById("fname");
var lnameone = document.getElementById("lname");

var span = document.getElementsByClassName("close")[0];

function pleaseWork() {
    document.getElementById("modalcontent").innerHTML = "Here's your dumb info you dumb person.";
    document.getElementById("firstnamesect").innerHTML = "First Name: " + fnameone.value;
    document.getElementById("lastnamesect").innerHTML = "Last Name: " + lnameone.value;
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
