import React from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

function EditTodo(props) {
    return (
      <div>
      <h1>Working?</h1>
        <form onSubmit={props.handleSubmit}>
                    <FormControl onChange = {props.editthetodochange} type = "text" value = {props.justeditthis} name= "title"/>
                    <Button type = "submit">Edit</Button>
        </form>
      </div>
    )
}

export default EditTodo;
