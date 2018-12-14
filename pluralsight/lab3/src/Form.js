import React from 'react';
import axios from 'axios'

export default class Form extends React.Component {
    constructor(props) {
        super();
        this.state = {
            userName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (event) => {
        console.log("event: submit", this.state.userName)
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                console.log(resp.data);
                this.setState({ userName: ''});
            })
    }
    render() {
        return ( 
            <div>
            <form onSubmit = {this.handleSubmit} >
            <input type = "text" value = {this.state.userName } onChange = {(event) => this.setState({userName: event.target.value})} placeholder = "Github username" required />
            <button type = "submit" > Add Card </button> 
            </form>  
            </div> 
        )
    }
}