function queryToString(query){
  let newObj = {}
  const splitFirst = query.split("/");
  const firstUrl = splitFirst[0]
  const halfUrl = splitFirst[1]
  const secondSplit = halfUrl.split("?")
  const endpoint = secondSplit[0]
  const secondhalfUrl = secondSplit[1]
  const thirdsplit = secondhalfUrl.split("&")
        const separatedArray = thirdsplit.forEach((obj)=>{
          const splitpieces = obj.split("=")
          return newObj[splitpieces[0]] = splitpieces[1]
        })
  console.log(newObj)
}

queryToString("localhost:9000/tacos?meat=chicken&corn=torilla&butt=whatever")





// let objectifyUrl = function(url){
//   let query = {};
//   url = url.slice(url.indexOf("?")+ 1).split(/[=&]/);
//   for (let i = 0; i <url.length; i+=2){
//     query[url[i]] = url[i + 1]
//   }
//   return query
// }
