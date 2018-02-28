function runItAll(){
    totalCost()
}


function totalCost() {
    let total = 0
    const checkboxes = document.getElementsByClassName('product-checkbox');

    for(var i=0; checkboxes[i]; ++i){
       if(checkboxes[i].checked){
            total += parseInt(checkboxes[i].value);
       }
    document.getElementById("answer").innerHTML = total
    }
}

function ccIsValid() {

}

function telephoneIsValid() {

}