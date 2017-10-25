import React from "react";

function FormComponent(props){
  return(
    <div>
      <form onSubmit = {props.handleSubmission}>
        <input onChange = {props.handleChange} value = {props.inputs.name} name = "name" type = "text" placeholder ="Country Name"/>
        <input onChange = {props.handleChange} value = {props.inputs.imgUrl} name = "imgUrl" type = "text" placeholder ="Flag Image Url"/>
        <button type = "submit">Add a Country You Want to Visit</button>
        <h1>{props.inputs.name}</h1>
      </form>
    </div>
  )
}

export default FormComponent
