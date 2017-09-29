function axiosStuff() {
axios.get("https://api.vschool.io/ericnatejones/todo", newTodo).then(function (response) {
        conosole.log
    });
}

axiosStuff();


//var xhr = new XMLHttpRequest();
//
//xhr.onreadystatechange = function() {
//    if (xhr.readyState === 4 && xhr.status === 200) {
//        console.log(JSON.parse(xhr.responseText));
//    }
//}
//
//xhr.open("GET", "https://swapi.co/api/starships/9");
//xhr.send();

//axios.get("https://api.vschool.io/ericnatejones/todo").then(function(response) {
//    // Do your coding here
//});


//var newTodo = {
//    title: "Buy fruit",
//    description: "Not carrits, although they're technically a tuber"
//}

//axios.post("https://api.vschool.io/ericnatejones/todo", newTodo).then(function(response) {
//    console.log(response.data);
//});


//axios.delete("https://api.vschool.io/ericnatejones/todo/59cd38608e509d2c3e49e030").then(function(response) {
//    console.log(response.data);
//});

//var update = {
//    completed: false
//}
//
//axios.put("https://api.vschool.io/ericnatejones/todo/58fa565b2c425d27974faf7e", update).then(function(response) {
//    console.log(response.data);
//});
