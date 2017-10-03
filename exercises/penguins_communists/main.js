let attacking = "";
let beingAttacked = "";
let transition = "";

    let message1 = "";
    let message2 = "";

class Party {
    constructor(name, population, dead) {
        this.name = name;
        this.population = population;
        this.dead = false;
    }
}



function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


const coinflip = getRandomArbitrary(1, 2);



const onHit = () => {
    const diceRoll = getRandomArbitrary(1, 2);
    if (diceRoll === 1) {
        return true;
    } else {
        return false;
    }
}

const onMiss = () => {
    if (onHit === false) {
        return true;
    } else {
        return false;
    }
}

const transatory = () => {
        beingAttacked = transition;
        attacking = beingAttacked;
        transition = attacking;
        
}



const sendNuke = (party, onHit, onMiss) => {
    deathToll = getRandomArbitrary(10000, 50000);
    if (onHit() === true) {
        const diceRoll1 = getRandomArbitrary(1, 3);
        if (diceRoll1 === 1) {
            message1 = "nuke hit and total domination occured killing "
        } else if (diceRoll1 === 2) {
            message1 = "nuke made contact and ignited a great ignite annihilating "
        } else if (diceRoll1 === 3) {
            message1 = "nuke destroyed women and children in the number of "
        }
        let newPop = parseInt(beingAttacked.population) - deathToll;
        console.log(attacking.name + " attacked " +  beingAttacked.name + " the " + message1 + beingAttacked.name + "leaving a population of " + newPop);
        beingAttacked.population = newPop;
    } else {
        const diceRoll2 = getRandomArbitrary(1, 3);
        if (diceRoll2 === 1) {
            message1 = "nuke was a dud due to lack of nuclear funding."
        } else if (diceRoll2 === 2) {
            message1 = "nuke hit but didn't do anything because it was funded by Kim Jong Un."
        } else if (diceRoll2 === 3) {
            message1 = "nuke was a toy purchased from the internet and did nothing."
        }
         console.log(attacking.name + " attacked " +  beingAttacked.name + " and the " + message1);
    }
}




const startTheWar = () => {
    const communists = new Party("communists", 1000000, false);
    const penguins = new Party("penguins", 1000000, false);
    if (coinflip === 1) {
        attacking = communists;
        beingAttacked = penguins;
        console.log('Next person is ' + communists.name + ' with a population of ' + communists.population);
    }
    if (coinflip === 2) {
        attacking = penguins;
        beingAttacked = communists;
        console.log('Next person is ' + penguins.name + ' with a population of ' + penguins.population);
    }

    while (communists.population > 0 && penguins.population > 0) {
        sendNuke(beingAttacked, onHit, onMiss);
        if (attacking.name === "penguins"){
            attacking = communists;
            beingAttacked = penguins;
        }   else  {
            attacking = penguins;
            beingAttacked = communists;
        }
    }
    console.log("game over");
}

console.log("Game Begin");
startTheWar();
