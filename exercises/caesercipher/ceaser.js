var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var letterPosArray = [];
var newLetterPosArray = [];
var reAssemblyarr = [];
 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function caeserCipher(str) {
    for (var i = 0; i < str.length; i++) {
        var letterPosition = alphabet.indexOf(str[i]);
        letterPosArray.push(letterPosition);

    }
}

caeserCipher(input);


function noSpaces(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (letterPosArray[i] === -1) {
            newLetterPosArray.push(letterPosArray[i]);
        } else {
            newLetterPosArray.push((letterPosArray[i] + shift) % 26);
        }
    }
    return newLetterPosArray;
}

noSpaces(letterPosArray);


function reAssembly(arr){
    for (var i = 0; i <arr.length; i++){
        if (newLetterPosArray[i] === -1){
            reAssemblyarr.push(" ");
            continue;
        }
        reAssemblyarr.push(alphabet[newLetterPosArray[i]]);
    }
    return reAssemblyarr;
}

reAssembly(newLetterPosArray);
console.log(reAssemblyarr.join(""));



//for (var i = 0; i < input.length; i++) {
//    input.charAt(i)
//    newAlphaArray.push(alphaString[i + shift]);
