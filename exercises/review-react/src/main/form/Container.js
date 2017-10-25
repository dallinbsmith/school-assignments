import React from "react";

import TodoFormComponent from "./Component.js"

class TodoFormContainer extends React.Component{
    constructor(){
      super();
        this.state = {
          todo: {
            title: ""
          }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
      }
      handleSubmission(event){
        event.preventDefault();
          this.setState({
            todo: {
              title: ""
            }
          })
      }
      handleChange(event){
        event.persist();
        this.setState((prevState) => {
          return {
            todo: {
              ...prevState.todo,
              [event.target.name]:event.target.value
            }
          }
        });
    }
    render(){
      return (
        <TodoFormComponent
                  todo = {this.state.todo}
                  handleChange = {this.handleChange}
                  handleSubmission = {this.handleSubmission}/>
      )
    }
}
export default TodoFormContainer
