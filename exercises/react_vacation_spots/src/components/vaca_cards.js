import React from "react";


function Vacacard(props){
  return(
    <div>
      <div className = "vaca_card" style = {{backgroundColor: "purple"}}>
      <h2>{props.place}</h2>
      <h2>{props.price}</h2>
      <h2>{props.timeToGo}</h2>
      </div>
    </div>
  )
}


export default Vacacard
