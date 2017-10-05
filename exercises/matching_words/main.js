//matchingWords = (str) => {
//    const matchingWordArr = [];
//    const multipleWords = [];
//    const justMultiples = [];
//    let strArray = str.split(" ");
//    for (let k = 0; k < strArray.length; k++) {
//        if (matchingWordArr.indexOf(strArray[k]) === -1) {
//            matchingWordArr.push(strArray[k]);
//        }
//    }
//
//
//    for (let i = 0; i < matchingWordArr.length; i++) {
//        for (let j = 0; j < strArray.length; j++) {
//            if (matchingWordArr[i] === strArray[j]) {
//                multipleWords.push(strArray[j]);
//            }
//        }
//    }
//        for (let l = 0; l < multipleWords.length; l++) {
//            if (multipleWords[l] === multipleWords[l+1] || multipleWords[l] === multipleWords[l-1]){
//                justMultiples.push(multipleWords[l]);
//            }
//        }
//    console.log(justMultiples);
//}
//
//matchingWords("Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas");


//matchingWords = (str) => {
//    const matchingWordArr = [];
//    const multipleWords = [];
//    const justMultiples = [];
//    const singleMultiples = [];
//    let strArray = str.split(" ");
//    for (let k = 0; k < strArray.length; k++) {
//        if (matchingWordArr.indexOf(strArray[k]) === -1) {
//            matchingWordArr.push(strArray[k]);
//        }
//    }
//
//
//    for (let i = 0; i < matchingWordArr.length; i++) {
//        for (let j = 0; j < strArray.length; j++) {
//            if (matchingWordArr[i] === strArray[j]) {
//                multipleWords.push(strArray[j]);
//            }
//        }
//    }
//        for (let l = 0; l < multipleWords.length; l++) {
//            if (multipleWords[l] === multipleWords[l+1] || multipleWords[l] === multipleWords[l-1]){
//                justMultiples.push(multipleWords[l]);
//            }
//        }
//    for (let j = 0; j <justMultiples.length; j++){
//        if(singleMultiples.indexOf(justMultiples[j])=== -1){
//            singleMultiples.push(justMultiples[j]);
//        }
//    }
//    console.log(singleMultiples);
//}
//
//matchingWords("Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas");



//matchingWords = (str) => {
//    
//    
//}


function secretMessage(str) {
    const arr = str.split(" ");
    const dupes = arr.filter((word, i, array) => array.indexOf(word) !==
                            array.lastIndexOf(word));
    const onlyOnce = dupes.filter((item, i, array) => i === array.indexOf(item));
    
}

secretMessage(phrase);