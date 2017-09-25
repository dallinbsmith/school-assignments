//function stringInput(string) {
//    var stringArray = [];
//    for (var i = 0; i < string.length; i ++){
//        stringArray.push(string[i]);
//    }
//    return stringArray;
//}
//
//console.log(stringInput("weinerbutt"));


//function stringChar(string, x) {
//    var charArray = [];
//    for (var i = 0; i < string.length; i++){
//        if (string[i] === x){
//            charArray.push(string.indexOf(x));
//        }else{
//            return "Sorry, you screwed this up!"
//        }
//    } 
//    return charArray;
//}
//
//console.log(stringChar("weinerbutt", "x"))


//function pickTheNumbs(array){
//    for (var i = 0; i < array.length; i++){
//        if (array[i] === 42){
//            return "I found 42, Dummy!";
//        }else{
//            return "It's NOT HERE DUMMY!"
//        }
//    }
//    
//}
//
//console.log(pickTheNumbs([53, 634, 453, 654, 655]));

function notMath(array) {
    var answer = array[0];
    for (var i = 0; i <array.length; i++){
        if (array[i] < answer){
            answer = array[i];
        }
    }
 return answer;
}

console.log(notMath([39, 9492, 432, 33, 23, 444, 2093, 532]));