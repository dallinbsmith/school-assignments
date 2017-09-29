let whosNext = "";

class Party{
    constructor(name, population, dead){
        this.name = name;
        this.population = population;
        this.dead = false;
    }
    dying(){
        if (this.population <= 0){
            this.dead = true;
        }
    }
}


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


const sendNuke = (party, onHit, onMiss) => {
    
}

const coinflip = getRandomArbitrary(1,2); 
const getTheNumbers = () => {
    getRandomArbitrary
    
}


const startTheWar = () => {
    const communists = new Party("communists", 1000000, false);
    const penguins  = new Party("penguins", 1000000, false);
    if (coinflip === 1){
        whosNext = communists;
        console.log('Next person is ' + communists.name + ' with a population of ' + communists.population);
        console.log(whosNext.name);
    }
     if (coinflip === 2){
        whosNext = penguins;
         console.log('Next person is '+ penguins.name + ' with a population of ' + communists.population);
         console.log(whosNext.name);
    }
    
    while (communists.dead === false && penguins.dead === false){
        
        
        
        communists.dying();
        penguins.dying();
    }
}

startTheWar();