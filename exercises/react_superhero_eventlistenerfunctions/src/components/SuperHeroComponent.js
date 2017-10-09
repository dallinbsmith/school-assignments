import React from "react";

import Data from "./SuperData.json"
import Superhero from "./Superhero.js"

function SuperHeroComponent(props){

  function catchPhraseGo(catchphrase){
      alert(catchphrase);
  }
  const mappedHeros = Data.map(function(obj, i){
      return <Superhero
                  name = {obj.name}
                  image = {obj.image}
                  catchphrase = {obj.catchphrase}
                  superpower = {obj.superpower}
                  description = {obj.description}
                  catchPhraseGo = {catchPhraseGo}
                  key = {obj.name + obj[i]}/>

  })
  return mappedHeros;
};

export default SuperHeroComponent;
