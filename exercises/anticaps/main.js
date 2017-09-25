function antiCaps(string) {
    newArray = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            newArray.push(string[i].toUpperCase());    
        }else{
            newArray.push(string[i].toLowerCase());
        }
        
    }
    return newArray.join('');
}

console.log(antiCaps("BUTThead"));
