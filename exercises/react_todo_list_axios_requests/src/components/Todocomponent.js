import React from "react"

import { Button, FormControl, Col} from 'react-bootstrap';

function Todocomponent(props){
  return(
    <div className = "todoitem">
    <Col xs={12} md={5} className = "todoitem">
      <h1>{props.todo.title}</h1>
      <Button className = "deleteit"
      onClick= {() => {props.deleting(props.todo._id)}}>DELETE IT</Button>
          <div>
              <form onSubmit={props.submitEdit}>
                <FormControl onChange = {props.changingStuff} type = "text" value = {props.editThisJunk.title} name= "title"/>
                <Button type = "submit">Edit</Button>
              </form>
          </div>
      </Col>
    </div>
  )
}

export default Todocomponent
