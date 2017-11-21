import React from "react";
import axios from "axios";
import EntryComponent from "./EntryComponent";
import CalContainer from "./calendar/CalContainer";
import {connect} from "react-redux";
import {saveEntry, startEntry, deleteEntry} from "../../../redux/actions";

class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState(prevState => {
            const name = event.target.name;
            const newValue = event.target.value;
            return({
                ...prevState,
                [name]: newValue
            });
        });
    }

    handleStart(event) {
        event.preventDefault();
        const url = "http://localhost:10100/journal/";
        axios.post(url, {title: ""}).then(response => {
            this.setState(response.data);
        }).catch(err => {
            console.log(err);
        });
        document.getElementById("entry-form").disabled = false;
        document.getElementById("save-button").disabled = false;
        document.getElementById("delete-button").disabled = false;
    }

    handleSave(event) {
        event.preventDefault();
        this.props.saveEntry(this.state._id, this.state);
    }

    handleDelete(event) {
        if (window.confirm("Are you sure you want to delete this entry?") === true) {
            this.props.deleteEntry(this.state._id);
            this.setState({
                title: "",
                text: ""
            });
            document.getElementById("entry-form").disabled = true;
            document.getElementById("save-button").disabled = true;
        }
    }

    render() {
        console.log(this.state)
        const containerStyles = {
            display: "flex",
            justifyContent: "space-around"
        }
        return (
            <div style={containerStyles}>
                <EntryComponent
                    input={this.state}
                    handleChange={this.handleChange}
                    handleStart={this.handleStart}
                    handleSave={this.handleSave}
                    handleDelete={this.handleDelete}/>
                <CalContainer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {saveEntry, startEntry, deleteEntry})(Journal);
