var readlineSync = require('readline-sync');

var dictionary = {};

startTheDict()

function startTheDict() {
    var newWord = readlineSync.question("Do you have a word to look up?");
    while (newWord === "Y" || newWord === "Yes" || newWord === "yes" || newWord === "y") {
        var word = readlineSync.question("Please Enter a word:");
        if (dictionary[word] === undefined) {
            console.log("That word is not yet in our dictionary.")
            var definition = readlineSync.question("Please Enter a definition for the word:");
            dictionary[word] = definition;
            console.log(word + ": " + definition);
            var other = readlineSync.question("Do you have another word to look up?");
            if (other === "N" || other === "n" || other === "no" || other === "No"){
                break
            }
        } else {
            console.log(dictionary[word]);
            var other = readlineSync.question("Do you have another word to look up?");
            if (other === "N" || other === "n" || other === "no" || other === "No"){
                break
            }
        }
    }
    console.log("goodbye!");
}

