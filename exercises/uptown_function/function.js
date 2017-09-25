var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

//function justPrint() {
//    return lyrics.join(" ");
//}
//
//console.log(justPrint());

//function printBackwards() {
//    return lyrics.reverse().join(" ");
//}
//
//console.log(printBackwards());

//function everyOther(arr) {
//    var otherArray = [];
//    for (var i = 0; i < arr.length; i+= 2){
//            otherArray.push(arr[i]);    
//    }
//    console.log(otherArray.join(" "));
//}
//
//everyOther(lyrics);

function bonusFunc(ary){
    var bonusArray = [];
    for (var i = 0; i < ary.length; i++){ 
        if (i % 2 === 1){
        bonusArray.push(ary[i]);
        bonusArray.push(ary[i-1]);
        }
    }    
    return bonusArray.join(" ");
}

console.log(bonusFunc(lyrics));