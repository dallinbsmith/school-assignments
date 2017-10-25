import React from "react";

function TodoFormComponent(props){
  return(
    <div>
      <form onSubmit = {props.handleSubmission}>
      <h1>something</h1>
      <input onChange = {props.handleChange} value = {props.todo.title} name = "title" type = "text"/>
      <button type = "submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoFormComponent
