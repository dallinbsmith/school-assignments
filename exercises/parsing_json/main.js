var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.objects[0].pokemon[2].name;
        var listnames = data.objects[0].pokemon.map(function(obj){
                                                   return "<p> " + obj.name + "</p>"});
//        document.getElementById("name").innerHTML = "JSON results: " + jsonData;
        document.getElementById("name2").innerHTML = listnames.join("");
    }
};

xhr.open("GET","http://api.vschool.io:6543/pokemon.json" , true);  
xhr.send();

































//var xhr = new XMLHttpRequest();
//
//xhr.onreadystatechange = function () {  
//    if (xhr.readyState == 4 && xhr.status == 200) {
//        var jsonData = xhr.responseText;
//        var data = JSON.parse(jsonData);
//        var name = data.name;
//        document.getElementById("name").innerHTML = "JSON results: " + jsonData;
//        document.getElementById("name2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
//        spaceshipurl = data.starships[0];
//        console.log(spaceshipurl);
//    }
//};
//
//xhr.open("GET", "https://swapi.co/api/people/1/", true);  
//xhr.send();

//
//
//
//var getJSON = function(url, callback) {
//    var xhr = new XMLHttpRequest();
//    xhr.open('GET', url, true);
//    xhr.responseType = 'json';
//    xhr.onload = function() {
//      var status = xhr.status;
//      if (status === 200) {
//        callback(null, xhr.response);
//      } else {
//        callback(status, xhr.response);
//      }
//    };
//    xhr.send();
//};
//
//getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback',
//function(err, data) {
//  if (err !== null) {
//    alert('Something went wrong: ' + err);
//  } else {
//    alert('Your query count: ' + data.query.count);
//  }
//});