var readlineSync = require('readline-sync');
var input = readlineSync.question("Put in a dumb phrase so I can count the letters.");
//var newArray = [];
//var otherArray = [];
//var answerArray = [];
//var objAnswer = {};
//
//
//function numberLetters(str) {
//    for (var i = 0; i < str.length; i++) {
//        if (newArray.indexOf(str[i]) === -1) {;
//            objAnswer.thing = input[i];
//            newArray.push(input[i])
//             answerArray.push(input[i]);
//        } else {
//            otherArray.push(input[i]);
//
//            }
//        }
//
//    console.log(newArray);
//    console.log(otherArray);
//}
//
//numberLetters(input);
//
//function comparison(arr, arry) {
//    for (var i = 0; i < arr.length; i++) {
//        for (var j = 0; j < arry.length; j++) {
//            if (arr[i] === arry[j]) {
//                answerArray.push(arr[i]);
//            }
//        }
//    }
//}
//
//comparison(input, otherArray);
//console.log(answerArray);
//console.log(objAnswer);

//var inputArray = [];
var splitput = input.split("");
//
//var answer = splitput.forEach(function (letter) {
//if (splitput[letter] === undefined) {
//    splitput[letter] = 1;
//} else {
//    splitput[letter]++;
//}
//});



var answer = splitput.reduce(function(runningTotal, letter){
      splitput[letter] ;
//    }else{
//        runningTotal.letter++;
//    }
},{});

console.log(answer);