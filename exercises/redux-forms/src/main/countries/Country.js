import React from "react"

function Country(props){
  const style = {
    backgroundImage: `url(${props.country.imgUrl})`,
    backgroundSize: "cover",
    width: "100%"
  }
  return (
    <div style ={{height: "300px", width: "500px"}}>
      <div style = {style}>
      <h4>{props.country.name}</h4>
    </div>
    </div>
  )
}

export default Country
