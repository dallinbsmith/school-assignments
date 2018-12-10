import React from "react";
import AddComponent from "./AddComponent";
import {connect} from "react-redux";
import {addShit} from "../../../../redux/actions";

class AddContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            location: "",
            details: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return({
                ...prevState,
                [name]: newValue
            });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addShit(this.state);
        this.setState({
            name: "",
            location: "",
            details: ""
        });
    }

    render() {
        return (
            <AddComponent
                input={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
        )
    }
}

export default connect(null, {addShit})(AddContainer);
