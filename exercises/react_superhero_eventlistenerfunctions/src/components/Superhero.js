import React from "react";

function Superhero(props){
  console.log(props);
  return (
    <div className = "card">
      <h3 className = "top">COOL SUPERHERO FOR POPULAR KIDS</h3>
      <img src = {props.image} className ="images"/>
      <div>
      <h1 className = "title" onClick = {(e) => props.catchPhraseGo(props.catchphrase)}>{props.name}</h1>
      <h3 className = "superpower">{props.superpower}</h3>
      <h4 className = "description">{props.description}</h4>
      </div>
      </div>
  )
}

export default Superhero;
