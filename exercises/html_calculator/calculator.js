

function add(){
var add1 = parseInt(document.getElementById("firstadd").value);
var add2 = parseInt(document.getElementById("secondadd").value);
document.getElementById("answeradd").value = (add1 + add2);
}

function subtract(){
var subtract1 = parseInt(document.getElementById("firstsubtract").value);
var subtract2 = parseInt(document.getElementById("secondsubtract").value);
document.getElementById("answersubtract").value = (subtract1 - subtract2);
}

function multiply(){
var multiply1 = parseInt(document.getElementById("firstmultiply").value);
var multiply2 = parseInt(document.getElementById("secondmultiply").value);
document.getElementById("answermultiply").value = (multiply1 * multiply2);
}

function clearthis(){
    document.getElementById("firstmultiply").value = '';
    document.getElementById("secondmultiply").value = '';
    document.getElementById("answermultiply").value = '';
    document.getElementById("firstsubtract").value = '';
    document.getElementById("secondsubtract").value = '';
    document.getElementById("answersubtract").value = '';
    document.getElementById("firstadd").value = '';
    document.getElementById("secondadd").value = '';
    document.getElementById("answeradd").value = '';
}