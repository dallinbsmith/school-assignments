var readlineSync = require('readline-sync');
var input = readlineSync.question("Please enter a word");

var noSpaces = input.replace(/\s/g, "");
var noSpecialCharacters = noSpaces.replace(/[^\w\s]/gi, "");
var paliString = noSpecialCharacters.toLowerCase().split("");

findPalindrome(paliString);

function findPalindrome(array){
    for (var i = 0; i < array.length; i++){
      if (array[i] !== array[array.length -1 - i]){
          console.log("not palindrome");
          return false;
      }        
    } 
    console.log("this is a palindrome");
    return true;
}










//
//
//
//
//
//
//
//
//var chai = require("chai");
//
//var isPalindrom = require("..app.js");
//
//describe('Checks palindrome', function(){
//   it('Should have the same characters forward and backwards', fuction(){
//      assert.equal(isPalindrom("racecar"), true)
//      
//      }); 
//    
//});