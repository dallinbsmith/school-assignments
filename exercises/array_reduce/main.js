//var nums = [1,2,3];
//
//var answer = nums.reduce(function(runningTotal, num){
//    return runningTotal + num
//});
//
//console.log(answer);
//


//var nums = [1,2,3];
//
//var answer = nums.reduce(function(runningTotal, num){
//    return runningTotal + num.toString();
//});
//
//console.log(answer);




//var voters = [  
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
//];
//
//
//var answer  = voters.reduce(function(runningtotal, obj){
//         if (obj.voted === true){
//                            return runningtotal + obj.voted;
//}   
//    return runningtotal;
//}, 0);
//
//console.log(answer);


//works but isn't right

//var didVote = 0; 
//var answer = voters.reduce(function(runningTotalOfVoters, voter){
//        if (runningTotalOfVoters.voted === true){
//             didVote++;
//         }
//        },0);
//
//console.log(answer);






// ********WORKS***********
//  WHY DID THIS TAKE ME SO LONG?!
//var answer = voters.reduce(function(runningTotal, voter){
//     if (voter.voted === true){
//         return runningTotal + 1;
//     }else {
//         return runningTotal;
//     }
//    
//}, 0);
//
//console.log(answer);


//**************ALSO WORKS!!!
//************THIS ONE IS BETTER WITH AN OBJECT!!!
//var answer = voters.reduce(function(results, voter){
//    if (voter.voted){
//        results.didVote++;
//    }else{
//        results.didntVote++;
//    }
//    return results
//},{didVote: 0, didntVote: 0});
//
//console.log(answer);



//**************** WORKS!!!!!!

//var wishlist = [  
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
//];
//
//var answer = wishlist.reduce(function(runningPrice, obj){
//    return runningPrice + obj.price;
//},0);
//
//console.log(answer);

//
//var answer = wishlist.reduce(function(runningPriceTotal, currentObj){
//   return runningPriceTotal + currentObj.price;
//}, 0);
//
//
//console.log(answer);


//var arrays = [  
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
//];
//
//
//var answer = arrays.reduce(function(flattened, arr){
//    return flattened.concat(arr);
//    
//},[]);
//
//
//console.log(answer);
//




// Flattening Arrays
//var arrays = [  
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
//];
//
//
//var answer = arrays.reduce(function(flattened, current){
//    return flattened.concat(current);
//    
//},[]);
//
//console.log(answer);


//flatten ["1", "2", "3", true, 4, 5, 6];  



//var voters = [  
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
//];
//
//var answer = voters.reduce(function(runningTotal, obj){
//    if (obj.age >= 18 && obj.age <= 25){
//        ++runningTotal.youth;
//        if (obj.voted === true){
//            ++runningTotal.youngVotes;
//        } 
//    }else if (obj.age >= 26 && obj.age <= 35){
//        ++runningTotal.mids;
//        if (obj.voted === true){
//            ++runningTotal.midVotes;
//        } 
//    }
//        else if (obj.age >= 36 && obj.age <= 55){
//        ++runningTotal.olds;
//        if (obj.voted === true){
//            ++runningTotal.oldVotes;
//        }
//    }
//    return runningTotal;
//},{youngVotes: 0,
//        youth:0,
//        midVotes:0,
//        mids:0, 
//        oldVotes: 0,
//        olds: 0});



//console.log(answer);



//function voterResults(arr) {
//    var obj = {
//        youngVotes: 0,
//        youth:0,
//        midVotes:0,
//        mids:0, 
//        oldVotes: 0,
//        olds: 0
//    }
//    return arr.reduce(function(results, currVoter){
//        if (currVoter.age >= 18 currVoter.age <= 25) {
//            results.youth++;
//            if (currVoter.voted){
//                resutls.youngVotes++
//            }
//            
//        }else if (currVoter.age >= 26 && currVoter.age )
//    })       
//}
//
//var answer 