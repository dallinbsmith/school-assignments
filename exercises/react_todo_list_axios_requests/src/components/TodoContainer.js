import React from "react"
import Todocomponent from "./Todocomponent.js"

class TodoContainer extends React.Component{
    constructor(props){
    super(props);
      this.state = {
        editThisJunk: {
            title: ""

          }
      }
      this.changingStuff = this.changingStuff.bind(this);
      this.submitEdit = this.submitEdit.bind(this);
}
changingStuff(event){
  event.persist();
  this.setState((prevState)=>{
      return {
          editThisJunk: {
              ...prevState.editThisJunk,
              [event.target.name]:event.target.value
          }
      }
  });
}
submitEdit(event){
    event.preventDefault();
    this.props.editThisJunk(this.props.todo._id, this.state.editThisJunk);
}


    render(){
      return(
            <Todocomponent
                todo={this.props.todo}
                editThisJunk={this.state.editThisJunk}
                deleting = {this.props.deleting}
                submitEdit = {this.submitEdit}
                changingStuff = {this.changingStuff}

                />
      )
  }
}
export default TodoContainer
