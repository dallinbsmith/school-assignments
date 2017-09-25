function handleClick(){
    var goombaval = document.getElementById("goomba").value;
    var bobombsval = document.getElementById("bobombs").value;
    var cheepcheepval = document.getElementById("cheepcheep").value;
    document.getElementById("amountdue").value = ((goombaval * 5) + (bobombsval * 7) + (cheepcheepval * 11));
}


