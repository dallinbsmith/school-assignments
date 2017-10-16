import React from "react"
import axios from "axios"
import { Button, FormControl } from 'react-bootstrap';

import TodoContainer from "./components/TodoContainer"

class App extends React.Component{
  constructor(){
  super()
    this.state = {
      todolist : [],
      todo: {
          title : ""
      }
    }
      this.postANewTodo = this.postANewTodo.bind(this);
      this.changingStuff = this.changingStuff.bind(this);
      this.deleteThisJunk = this.deleteThisJunk.bind(this);
      this.editThisJunk = this.editThisJunk.bind(this);
  }
  componentDidMount(){
    axios.get(`https://api.vschool.io/dallin/todo`).then((response) => {
        this.setState({
          todolist : response.data.reverse()

        })
    })
  }
  postANewTodo(){
    axios.post(`https://api.vschool.io/dallin/todo`, this.state.todo).then(responses => {
        this.setState((prevState) => {
          return {
              todolist : [responses.data, ...prevState.todolist],
              todo: {
                  title : ""
              }
          }
        })
    })
  }
  changingStuff(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    this.setState(prevState => {
        return {
            todo: {
                ...prevState.todo,
                [name]: newValue
            }
        }
    });
}
deleteThisJunk(id){
  axios.delete(`https://api.vschool.io/dallin/todo/${id}`).then(response => {
    this.setState(prevState => {
          const filteredArray = prevState.todolist.filter((obj) => {
              return obj._id !== id
          })
        return {
            todolist : filteredArray

        }
      })
  })
}
editThisJunk(id, editedtodo){
  axios.put(`https://api.vschool.io/dallin/todo/${id}`, editedtodo).then(response => {
    let neweditedtodo = response.data
    this.setState(prevState => {
        const editedArray = prevState.todolist.map((obj) => {
            if (obj._id === id){
              return neweditedtodo
        } else {
          return obj
      }
    })
    return {
      ...prevState,
      todolist: editedArray
    }
  })
})
}


  render() {
    return(
        <div>
        <h1 className = "title">This a To Do List</h1>
        <FormControl className= "input_submission" type = "text" value = {this.state.todo.title} onChange = {this.changingStuff} name = "title"/>
        <Button className="sendbutton" bsStyle="primary" bsSize="large" onClick = {this.postANewTodo}>SEND IT</Button>
          {this.state.todolist.map((item, i) => {
              return (
                <TodoContainer
                      todo = {item}
                      deleting = {this.deleteThisJunk}
                      editThisJunk = {this.editThisJunk}
                      key = {item.title + i}/>

            )
          }
        )}

        </div>
    )
  }
}

export default App
