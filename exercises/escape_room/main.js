var readlineSync = require('readline-sync');
var inventory = 0;
doOrDie();

function doOrDie() {
    var predicament = readlineSync.question('You\'re in a big room. Do you a\) Put your hand in a hole? b\) Look for a Key? or c\) Open a Door?');
        if (predicament === "a") {
            console.log("You died. Don't put your hand in a hole. Please start over.");
        } else if (predicament === "b") {
            console.log("Key Found!");
            inventory++;
            doOrDie();
        }else if (predicament === "c"){
            if (inventory > 0){
                console.log("Door Opened!! Congrats!! You win this super lame game!");
            }else{
                console.log("You\'re locked in!!");
                doOrDie();
            }
        }else{
            console.log("Please Enter a, b, or c!");
            doOrDie();
        }
    }
