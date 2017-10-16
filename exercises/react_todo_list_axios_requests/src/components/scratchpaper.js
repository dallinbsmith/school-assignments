import React from "react";

function TodoItem(props) {
    return (
        <div>
            <h1 style={{textDecoration: props.editedTodo.completed ? "line-through" : "none"}}>{props.todo.title}</h1>
            <h3>{props.todo.description}</h3>
            <button onClick={() =n> props.deleteTodo(props.todo._id)}>Delete</button>
            <button onClick={props.handleToggle}>Edit</button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSubmit}>
                    <input onChange={props.handleEdit} value={props.editedTodo.title} name="title"type="text"placeholder="Edit Title"/>
                    <input onChange={props.handleEdit}type="checkbox" checked={props.editedTodo.completed} name="completed"/>
                    <button type="submit">Save</button>
                </form>
            </div>
            <hr/>
        </div>
    )
}

export default TodoItem;
























import React from "react";
import TodoItem from "./TodoItem";

class ItemContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleDisplay: false,
            editTodo: {
                title: props.todo.title,
                description: props.todo.description,
                completed: props.todo.completed
            }
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState((prevState)=>{
            return {
                ...prevState,
                toggleDisplay: !prevState.toggleDisplay
            }
        })
    }
    //handle edit function
    handleEdit(event){
        event.persist();
        this.setState((prevState)=>{
            return {
                editTodo: {
                    ...prevState.editTodo,
                    [event.target.name]: event.target.type === "checkbox"? event.target.checked :event.target.value
                }
            }
        });
    }
    //handle submit function
    handleSubmit(event){
        event.preventDefault();
        this.props.editTodo(this.props.todo._id, this.state.editTodo);
    }
    render(){
        return (
            <TodoItem
                todo={this.props.todo}
                deleteTodo={this.props.deleteTodo}
                editedTodo={this.state.editTodo}
                handleEdit={this.handleEdit}
                handleSubmit = {this.handleSubmit}
                toggleDisplay = {this.state.toggleDisplay}
                handleToggle = {this.handleToggle}
                />
        )
    }
}
export default ItemContainer;












import React from "react";
import TodoItemContainer from "./TodoItemContainer";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import AddTodoForm from "./AddTodoForm";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: {
                title: "",
                description: ""
            }
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postTodo = this.postTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

   componentDidMount() {
        axios.get("https://api.vschool.io/ericnatejones/todo").then(response => {
            this.setState({
                todos: response.data.reverse()
            });
        });
    }

   postTodo(e) {
        e.preventDefault();
        if (this.state.newTodo.title === "") {
            alert("You have to provide a title to your todo")
        } else {
            axios.post(`https://api.vschool.io/ericnatejones/todo/`, this.state.newTodo)
            .then(response => {
                this.setState(prevState => {
                    return {
                        todos: [response.data, ...prevState.todos],
                        newTodo: {
                            title: "",
                            description: ""
                        }
                    }
                })
            }).catch(err => {
                alert(err);
            });
        }

   }

   deleteTodo(id) {
        axios.delete(`https://api.vschool.io/ericnatejones/todo/${id}`).then(response => {

           this.setState(prevState => {
                const newArr = prevState.todos.filter(item => item._id !== id)
                return {
                    todos: newArr
                }
            });
        });
    }

   editTodo(id, editedTodo){
        axios.put(`https://api.vschool.io/ericnatejones/todo/${id}`, editedTodo).then((response)=>{
            let newEdit = response.data;
            this.setState((prevState)=>{
                const newTodos = prevState.todos.map((todo)=>{
                    if(todo._id === id){
                        return newEdit
                    } else {
                        return todo;
                    }
                })
                return {
                    ...prevState,
                    todos: newTodos
                }
            })
        })
    }

   handleChange(event) {
        event.persist();
        // const newValue = event.target.value;
        // const name = event.target.name;
        this.setState((prevState) => {
            return {
                newTodo: {
                    ...prevState.newTodo,
                    [event.target.name]: event.target.value
                }
            }
        });
    }

   render() {
        return (
            <div>
                <Row>
                    <Col sm={6} smOffset={3}>
                        <AddTodoForm
                            handleChange={this.handleChange}
                            state={this.state}
                            handleSubmit={this.postTodo} />
                    </Col>
                </Row>
                <Row>
                {this.state.todos.map((item, i) => {
                    return (
                        <Col xs={6} md={4} key={item.title + i}>
                            <TodoItemContainer
                                todo={item}
                                deleteTodo={this.deleteTodo}
                                editTodo={this.editTodo} />
                        </Col>
                    )
                })}
                </Row>
            </div>
        )
    }
}

export default TodoList;
