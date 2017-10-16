function every(arr, f){
  for (var i = 0; i < arr.length; i++){
    if (f(arr[i]) === true )
    {}else{
      console.log(false);
      return false;
    }
  }console.log(true);
  return true;
}


var addfunction = function add(x){
 if (2 + 3 === x){
   return true
 }
}

function some(arr, f){
  for (var i = 0; i < arr.length; i++){
    if (f(arr[i]) === true )
    {console.log(true);
      return true;
    }
  }console.log(false);
  return false;
}




some([2, 4, 6I], addfunction)
