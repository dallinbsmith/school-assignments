function getDaysBefore(n){
  const currentDate = new Date()
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  let month = currentDate.getUTCMonth();
  const answer = `${month + 1}/${day}/${year}`
  console.log(answer)
}


getDaysBefore(9);
