import React from "react"

function Persontohit(props){
  return(
    <div className = "hitcard" style = {{backgroundColor: `#${props.color}`}}>
      <img className = "hitimage" src = {props.image}/>
      <h1 className = "title">{props.data}</h1>
      </div>
  )
}

export default Persontohit;
