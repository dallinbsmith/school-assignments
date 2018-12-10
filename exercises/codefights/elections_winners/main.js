function electionsWinners(votes, k) {
    const maximum = Math.max(...votes)
    let count = 0
    const answer = votes.filter(item => (item - maximum || ++count, item + k > maximum))
    return answer.length || (count==1 ? 1 : 0)
}

console.log(electionsWinners(  [5, 5, 3, 4, 5, 1], 0))

