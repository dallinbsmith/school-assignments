let database = [
  {a:0, b:1, c: 0, d: 1},
  {a:1, b:0, c: 2, d: 2},
  {a:0, b:3, c: 1, d: 2},
  {a:1, b:2, c: 0, d: 1},
  {a:2, b:0, c: 1, d: 2},
  {a:3, b:0, c: 2, d: 1},
]


function filterDatabase(query, database){
  return database.filter((doc)=>{
    for (let key in query){
        if (doc[key] !== query[key])
          return false;
    }
    return true;
  })
}

let query = {
  a:0,
  b:1

}

console.log(filterDatabase(query,database));
