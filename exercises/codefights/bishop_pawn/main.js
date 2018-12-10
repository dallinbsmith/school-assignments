

console.log(bishopAndPawn("a1", "c3"))







//function bishopAndPawn(bishop, pawn) {
//     const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"]
//     const bish = [alpha.indexOf(bishop.split('')[0]) , (parseInt(bishop.split('')[1])) - 1];
//     const pwn = [alpha.indexOf(pawn.split('')[0]) , (parseInt(pawn.split('')[1])) - 1]; 
//     const moves = [];
//     let dir1 = false;
//     let dir2 = false;
//     let dir3 = false;
//     let xcount = bish[0];
//     let ycount = bish[1]
//     moves.push([bish[1], bish[0]])
//     const recursion = (function (x, y){
//            if (dir1 === false && x > - 1 && y < 9){
//                xcount--
//                ycount++
//                moves.push([x, y])
//                recursion(xcount, ycount)
//            }else if(dir1 === false){
//                dir1 = true
//                 xcount = bish[0]
//                 ycount = bish[1]
//                recursion(xcount, ycount)
//            }else if (dir2 === false && x < 9 && y > -1){
//                xcount++
//                ycount--
//                moves.push([x, y])
//               recursion(xcount, ycount)
//            }else if(dir2 === false){
//                dir2 = true
//                xcount = bish[0]
//                ycount = bish[1]
//                recursion(xcount, ycount)
//            }else if (dir3 === false && x < 9 && y < 9){
//                xcount++
//                ycount++
//                moves.push([x, y])
//               recursion(xcount, ycount)
//            }else if(dir3 === false){
//                 console.log(moves)
//                dir3 = true
//                xcount = bish[0]
//                ycount = bish[1]
//                recursion(xcount, ycount)
//            }else if(x > -1 && y > -1){
//                xcount--
//                ycount--
//                moves.push([x, y])
//               recursion(xcount, ycount)
//            }
//     })
//     
//     recursion(xcount, ycount)
//    return moves.some((item)=>{
//        console.log(item.join(''))
//        return item.join('') === pwn.join('')
//     })
//}



//     const availablemoves = (bish[0] === 0 || bish[1] === 0 || bish[0] === 7 || bish[1] === 7)? 8 : (bish[0] === 1 || bish[1] === 1 || bish[0] === 6 || bish[1] === 6)? 10 : (bish[0] === 2 || bish[1] === 2 || bish[0] === 5 || bish[1] === 5)? 12 : 14 




//     while(xcount > - 1 && ycount < 9){
//         moves.push([xcount, ycount])
//         xcount--
//         ycount++
//     }
//     xcount = bish[0];
//    console.log(bish[0])
//     ycount = bish[1];
//    while(xcount < 9 && ycount > -1){
//         moves.push([xcount, ycount])
//         xcount++
//         ycount--
//     }
//     xcount = bish[0];
//     ycount = bish[1];
//     while(xcount < 9 && ycount < 9){
//         moves.push([xcount, ycount])
//         xcount++
//         ycount++
//     }
//     xcount = bish[0];
//     ycount = bish[1];
//    console.log(bish[0])
//    while(xcount > - 1 && ycount > - 1){
//         moves.push([xcount, ycount])
//         xcount--
//         ycount--
//     }    