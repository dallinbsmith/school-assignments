import React from "react"

function Todocomponent(props){
  return(
    <div>
      <h1>{props.todo.title}</h1>
      <button onClick= {() => {props.deleting(props.todo._id)}}>DELETE IT</button>
    </div>
  )
}

export default Todocomponent
