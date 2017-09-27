var modal = document.getElementById('myModal');

var btn = document.getElementById("submission");

var fnameone = document.getElementById("fname");
var lnameone = document.getElementById("lname");
var ageone = document.getElementById("age");
var gender = document.genderform.gender.value;

var dietaryArray = [];
var locationArray = [];

var span = document.getElementsByClassName("close")[0];

function pleaseWork() {
    document.getElementById("modalcontent").innerHTML = "Here's your dumb info you dumb person.";
    document.getElementById("firstnamesect").innerHTML = "First Name: " + fnameone.value;
    document.getElementById("lastnamesect").innerHTML = "Last Name: " + lnameone.value;
    document.getElementById("agesect").innerHTML = "You're all grown up: " + ageone.value + " Years old!!";
    document.getElementById("gendersect").innerHTML = "You are a " + document.genderform.gender.value;
    for (var i = 0; i < document.dietaryform.dietRestrictions.length; i++){
        dietaryArray.push(document.dietaryform.dietRestrictions[i].value);
    }
    document.getElementById("dietarysect").innerHTML = "You have the following restrictions: " + dietaryArray.join(', ');
    
    for(var i = 0; i < document.locationform.locationbox.length; i++){
        locationArray.push(document.locationform.locationbox[i].value);
    }
    document.getElementById("locationsect").innerHTML = "You want to travel to the following places: " + locationArray.join(', ');
    
    
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
