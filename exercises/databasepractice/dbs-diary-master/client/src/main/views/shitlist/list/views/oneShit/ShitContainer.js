import React from "react";
import ShitComponent from "./ShitComponent";
import {connect} from "react-redux";
import {editShit, deleteShit} from "../../../../../../redux/actions";
import axios from "axios";

class ShitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:10100/shitlist/${this.props.match.params.id}`).then(response => {
            this.setState(response.data);
        }).catch(err => {
            console.log(err);
        });
    }

    handleToggle(event) {
        event.target.parentElement.style.display = "none";
        event.target.parentElement.nextSibling.style.display = "flex";
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
        this.props.editShit(this.state._id, this.state);
        event.target.style.display = "none";
        event.target.previousSibling.style.display = "flex";
    }

    handleDelete() {
        this.props.deleteShit(this.props.shit._id);
    }

    render() {
        return <ShitComponent
                    input={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                    handleToggle={this.handleToggle}/>
    }
}

export default connect(null, {editShit, deleteShit})(ShitContainer);
