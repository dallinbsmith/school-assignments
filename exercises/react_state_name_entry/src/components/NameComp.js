import React from "react";

function NameComp(props){
  return (
      <div>
          <input onChange ={props.displayName} value ={props.value} type="text"/>
          <h1>{props.name}</h1>

          <ul>
              {props.list.map((obj)=>{
                return (
                  <li> {obj} </li>
                )
              })
            }
          </ul>
          <button onClick = {props.addToTheList}>Throw it on the List!!</button>
      </div>
  )
}

export default NameComp
