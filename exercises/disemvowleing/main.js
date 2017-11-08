function disemvowel(str){
  newObj = {}
  const noVowels = str.replace(/[aeiou\s/]/gi,'');
  const vowels = str.replace(/[^aeiou]/gi, '');
  newObj.str = noVowels.toLowerCase();
  newObj.vowels = vowels.toLowerCase();
  console.log(newObj)
}

disemvowel("Pickle Rick!")







// const disemvowel = function(str){
//   let output = {
//     str: "",
//     vowels: ""
//   }
//   let vowels = "aeiou";
//   for (let i = 0; i <str.length; i++){
//     if(vowels.include(str[i])){
//       output.vowels += str [i];
//     }else if (str[i].match(/\s/)){
//       continue;
//     } else {
//       output.str += str[i];
//     }
//   }
//   return output;
// }


// const disemvowel = str => {
//     const newStr = str.replace(/[ \t\r]/g, "").toLowerCase();
//     let disemvoweled = "";
//     let vowels = "";
//     for (let i = 0; i < newStr.length; i++) {
//         const current = newStr[i];
//         if (current === "a" || current === "e" || current === "i" || current === "o" || current === "u") {
//             vowels += current;
//         } else {
//             disemvoweled += current;
//         }
//     }
//     return {
//         disemvoweled,
//         vowels
//     }
// }
