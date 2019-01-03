import React, { Component } from 'react';

class Public extends Component {
    constructor(){
    super()    
    this.state = {
        message: ""
    }
}
    componentDidMount() {
        fetch('/public').then(response => {
            if (response.ok) return response.json();
            throw new Error("Network response not working...")
        })
            .then(response => this.setState({ message: response.message }))
            .catch(error => this.setState({ message: error.message }))
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Public;