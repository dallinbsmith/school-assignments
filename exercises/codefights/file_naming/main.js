function messageFromBinaryCode(code) {
    var binString = '';
    code.match(/.{1,8}/g).map((bin)=> {   
    binString += String.fromCharCode(parseInt(bin, 2));
  });
    return binString;
}

console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001"))