var neverEndingStory = {
    mainChar: "Bastian",
    bookChar: "Atreyu",
    horse: "Artax",
    dragonThing: "Falkor",
    
}

function concatFunction() {
    return neverEndingStory.dragonThing.concat(neverEndingStory.mainChar);
}

console.log(concatFunction());

function indexFunction() {
    return neverEndingStory.dragonThing.toLowerCase().indexOf("f");
    
}

console.log(indexFunction());