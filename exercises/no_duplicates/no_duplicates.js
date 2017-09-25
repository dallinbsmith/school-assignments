
function noDuplicates(string){
var newArray = [];
    for (var i = 0; i < string.length; i++){
        if (newArray.indexOf(string[i]) === -1){
                 newArray.push(string[i]);
        }
    }
return newArray;
}
    
 console.log(noDuplicates("weinerweinerbuttbuttwhatever"));