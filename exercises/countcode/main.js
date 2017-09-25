function countCode(str){
    var codecount = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === "c" && str[i+1] === "o" && str[i+3] === "e"){
            codecount++;
        }
    }
    return "You found \"code\" or a near code word "+ codecount + " times."; 
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));