var readlineSync = require('readline-sync');
var enemyNow = "Bumbo";
var playerHealth = 25000;
var enemyHealth = 8000;
var playerInventory = [];

console.log("fun message");
var userName = readlineSync.question('May I have your name, player? ');
console.log('I do not like people named ' + userName + '!');


function walking() {
    var answer = readlineSync.question('You want to walk? type w to walk.');
    if (answer === 'w') {
        console.log('Sweet! Walking!');
        nowWalking();
    } else {
        console.log('Well sit there until you want to walk!');
        walking();
    }
}

walking();

//function walking() {
//    var answer = readlineSync.question('You want to walk? type w to walk.');
//        while (answer !== "w"){
//        console.log("Sit there for now then.");
//        walking();
//        }
//    console.log("Great! Walking!");
//    nowWalking();
//}

function nowWalking() {
    if (Math.random() <= .25) {
        console.log("Enemy is here!");
        enemyAppears();
    } else {
        walking();
    }
}

function enemyAppears() {
    var enemyNames = ["Trump", "Jaws", "Kung Fuhrer"];
    currentEnemy = enemyNames[Math.floor(Math.random() * enemyNames.length)];
    console.log(currentEnemy + " has been hiding in the bushes. He tears around the corner and screams 'You said a mean word. Fight me'!");
    enemyNow = currentEnemy;
    if (readlineSync.keyInYN('Do you fight him?')) {
        ultimateFight();
    } else {
        console.log("Wuss");
        runningScared();
    }

}



function ultimateFight() {
    var playerStrength = Math.floor(Math.random() * 5000);
    console.log("You summoned from the depths of Hell " + playerStrength + " butterfly kisses!");
    enemyHealth -= playerStrength;
    console.log("You attacked " + enemyNow + " with " + playerStrength + " unicorn blasts! Enemy now has " + enemyHealth + " health points left!");
    var enemyStrength = Math.floor(Math.random() * 5000);
    playerHealth -= enemyStrength;
    console.log(enemyNow + " has attacked you with " + enemyStrength + " bee stings. You have " + playerHealth + " remaining health points.");
    if (playerHealth <= 0) {
        console.log("A final blow took your remaining health points. You've been gutted and are left lying on the floor with your guts bleeding out. You are yet another victim of " + enemyNow + "! Game Over.");
    } else if (enemyHealth <= 0) {
        console.log("You killed " + enemyNow + "!");
        enemyHealth = 8000;
        var newStrength = Math.floor(Math.random() * 10000);
        playerHealth += newStrength;
        console.log("You've been awarded " + newStrength + " Health points!");
        getStuff();
        walking();
    } else {
        if (readlineSync.keyInYN('Do you wish to continue fighting?')) {
            ultimateFight();
        } else {
            console.log("You ran away!");
            runningScared();
        }
    }
}

function runningScared() {
    if (Math.round(Math.random()) + 1 === 1) {
        console.log("You ran very quickly and you Managed to escape. ");
        walking();
    } else {
        console.log(enemyNow + " bit your butt and tore into your flesh with chainsaw arms. You died and your life is over. No one cries at your funeral. Game Over.");
    }
}

function getStuff() {
    var inventoryArray = ["A cute little kitty", "A mug that says 'Thanks Obama'", "A Rainbow Flag signed by the Putin", "The Milky Way Galaxy", "An Orphaned Child", "Harambe", "A shower curtain from the Titanic", "A poorly rendered photograph of a duck", "An Empty Bottle", "The Washington Memorial", "Two sticks of gum", "A molar from Steve Irwin", "A shaved Liger", "A lost elderly lady"];
    playerInventory.push(inventoryArray[Math.floor(Math.random() * inventoryArray.length)]);
    console.log("You now have " + playerInventory.join(', ') + " in your pocket!");
}
