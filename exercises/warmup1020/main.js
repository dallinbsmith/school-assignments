function divisionByThree(num){
  let answer = 0
  let divisingnum = 0
  let latestnum = num
  while (latestnum > 1){
    if (latestnum % 3 === 0){
      divisingnum = latestnum/3
    }else if(latestnum % 3 === 2){
      divisingnum = ((latestnum + 1)/3)
    }else if(latestnum % 3 === 1){
      divisingnum = ((latestnum - 1)/3)
    }
      answer++
      latestnum = divisingnum
  }
  console.log(answer)
}


divisionByThree(41)
