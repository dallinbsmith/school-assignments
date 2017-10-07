import React from "react";

function Contactcard(props){
  return (
    <div>
      <div className = "card">
        <img src = {props.img} className = "image_circle"/>
        <h3 className = "name">{props.firstName} {props.lastName}</h3>
        <h5 className = "name">{props.phone}</h5>
      </div>
    </div>
  )
}

export default Contactcard
