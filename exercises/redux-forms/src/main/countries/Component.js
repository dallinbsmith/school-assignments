import React from "react"

function CountriesComponent(props){
  return (
    <div>
      <h1>{props.genList()}</h1>
    </div>
  )
}

export default CountriesComponent
