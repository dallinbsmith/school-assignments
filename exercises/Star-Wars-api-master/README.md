# Star-Wars

A small express server with endpoints centered around Star Wars. This will hopefully demonstrate to us abilities to make an express app, consume data from an API, and manipulate that data into some desired way. 

## Endpoints
* '/character/:name' - Returns an EJS view (nothing too fancy) with data about the given character. (Needs to work with at least 'luke', 'han', 'leia', and 'rey')
* '/characters' - Returns raw JSON of 50 characters (doesn't matter which 50). This endpoint should be able to take a query parameter in the URL called 'sort' 
    and the potential sort parameters will be 1 of the following, ['name', 'mass', 'height']  So the endpoint '/characters?sort=height' should return JSON of 50 characters sorted by their height. 
* '/planetresidents' - Return raw JSON in the form {planetName1: [characterName1, characterName2], planetName2: [characterName3]}. 
    So it is an object where the keys are the planet names, and the values are lists of residents names for that planet
	
## How to use
* install all the dependencies using 'npm install'
* execute server.js in node 

## Examples

* https://star-wars-njs.herokuapp.com/character/Quarsh
* https://star-wars-njs.herokuapp.com/characters?sort=height
* https://star-wars-njs.herokuapp.com/planetresidents?page=1

