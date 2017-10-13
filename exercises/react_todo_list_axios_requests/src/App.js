import React from "react"
import axios from "axios"

import Todocomponent from "./components/Todocomponent.js"

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
  }
  componentDidMount(){
    axios.get(`https://api.vschool.io/nonnie/todo`).then((response) => {
        this.setState({
          todolist : response.data.reverse()

        })
    })
  }
  postANewTodo(){
    for (var i = 0; i < 1000; i++){
    axios.post(`https://api.vschool.io/nonnie/todo`, this.state.todo).then(responses => {
        this.setState((prevState) => {
          return {
              todolist : [responses.data, ...prevState.todolist]
          }
        })
    })
  }
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
  axios.delete(`https://api.vschool.io/nonnie/todo/${id}`).then(response => {
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
  render() {
    return(
        <div>
        <input type = "text" value = {this.state.todo.title} onChange = {this.changingStuff} name = "title"/>
        <button onClick = {this.postANewTodo}>SEND IT</button>
          {this.state.todolist.map((item, i) => {
              return (
                <Todocomponent
                      todo = {item}
                      deleting = {this.deleteThisJunk}/>
            )
          }
        )}

        </div>
    )
  }
}

export default App
