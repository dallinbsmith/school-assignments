var g

var guyLeft = 0;

function anim(e){
    if(e.keyCode === 39){
        left +=2;
        guy.style.left = guyLeft + "px";
    }
    if(e.keyCode === 37){
        left -=2;
        guy.style.left = guyLeft + "px";
    }
}