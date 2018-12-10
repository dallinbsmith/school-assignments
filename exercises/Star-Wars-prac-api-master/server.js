// load the things we need
var express = require('express');
var request = require('request');
const promise = require('bluebird');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 

app.get('/character/:name', function(req, res) {
	var name = req.params.name;
	//var count = 1;
	var found = false;
	for (var i = 1; i <= 10 && !found; i++) {
	
	request('http://swapi.co/api/people?page='+i, function (error, response, body) {
	
	  if (!error && response.statusCode == 200) {
	  	var result = JSON.parse(body);
	    result.results.forEach(function(data){
	    	var breakName = data.name.split(' ')[0];
	    		if(breakName.toLowerCase() == name.toLowerCase())
	    		{
	    			found = true;
	    			console.log("Print this", breakName);
	    			res.render('pages/character', data);
	    		}
	    });
	  }
	});
	}
});

app.get('/planetresidents', function(req, res) {
	var page = req.query.page;
	if(Number(page) && Number(page)<7 && Number(page)>0)
	{
		var jsonToReturn = {};
		var characters = [];
	request('http://swapi.co/api/planets?page='+page, function (error, response, body) {
		if(error) console.log(error);
	  if (!error && response.statusCode == 200) {
	  	var result = JSON.parse(body);
	    result.results.forEach(function(data, idx, array){
	    		//console.log(data);
	    		jsonToReturn[data.name] = [];
	    		 return new Promise(function(resolve, reject){
	    		 	
	    		data.residents.forEach(function(resident)
	    		{
	    			
	    			request(resident, function (error2, response2, body2) {
	    				if(error) console.log(error);
	    				var result2 = JSON.parse(body2);
	    				 jsonToReturn[data.name].push(result2.name);
	    				resolve(jsonToReturn);
	    			})
	    			
	    		})
	    			}).then(()=>{
	    			if (idx === array.length - 1){ 
					       console.log("Last callback call at index " + idx + " with value "); 
					       console.log(jsonToReturn);
					      //res.render('pages/planets', {json: jsonToReturn});
					      res.json(jsonToReturn);
							return;
				   }
	 	    		})
	    		
	    });

	}
	
	})

	}
	else
	{
		res.json({success: false, message: "Enter correct parameter for page. (0 > Page >= 6) "});
	}
});

app.get('/characters', function(req, res) {
	var sort = req.query.sort;
	try{
	sort = sort.toLowerCase();
	}
	catch (err)
	{
		console.log(err);
	}
	console.log(sort);
	var jsonToReturn = [];
	for (var i = 1; i < 6 && jsonToReturn.length < 50; i++) {
	request('http://swapi.co/api/people?page='+i, function (error, response, body) {
		if(error) console.log(error);
	  if (!error && response.statusCode == 200) {
	  	var result = JSON.parse(body);
	    result.results.forEach(function(data){
	    	if(data)
		    	jsonToReturn.push(data);
		     if(jsonToReturn.length == 50)
		{
			
			if(sort == "name")
			{
			jsonToReturn.sort(function(a,b) {return (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0);} );
			//res.render('pages/characters', {json: jsonToReturn});
			res.json({success: true, count: jsonToReturn.length ,people: jsonToReturn});
						return;
			}
			else if(sort == "height" || sort == "mass")
			{
				jsonToReturn.sort(function(a, b) {
			    return a[sort] - b[sort];
			});
				//res.render('pages/characters', {json: jsonToReturn});
				res.json({success: true, count: jsonToReturn.length ,people: jsonToReturn});
						return;
			}
			else
			{
			res.json({success: true, message: 'Sorting parameter is Invalid or Not Defined, This list is not Sorted.', count: jsonToReturn.length ,people: jsonToReturn});
						return;
			}
			
		}
		else
		{
			console.log(jsonToReturn.length);
		}
	    });
	}
	});
	}
});


app.listen(process.env.PORT || 3000);
console.log('8080 is the magic port');