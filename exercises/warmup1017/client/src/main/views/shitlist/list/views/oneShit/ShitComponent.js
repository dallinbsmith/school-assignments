import React from "react";
import moment from "moment";

export default function Shit(props) {
    // const date = moment(props.input.date).startOf('day').fromNow();
    const containerStyles = {
        display: "flex",
        padding: "55px"
    }

    const shitContainerStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid green",
        color: "green",
        padding: "55px",
        height: "450px",
        width: "350px"
    }

    const nameStyles = {
        width: "250px",
        marginBottom: "10px"
    }

    const dateStyles = {
        width: "250px",
        marginBottom: "10px"
    }

    const locationStyles = {
        width: "250px",
        marginBottom: "10px"
    }

    const detailsContainer = {
        borderTop: "1px solid green",
        paddingTop: "10px",
        height: "50%",
        overflow: "scroll",
        width: "250px",
        marginBottom: "10px"
    }

    const formStyles = {
        display: "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid yellow",
        color: "yellow",
        height: "450px",
        width: "350px"
    }

    const nameInputStyles = {
        height: "40px",
        width: "250px",
        backgroundColor: "transparent",
        outline: "none",
        border: "2px solid yellow",
        color: "yellow",
        fontSize: "2em",
        marginBottom: "10px"
    }

    const locationInputStyles = {
        height: "40px",
        width: "250px",
        backgroundColor: "transparent",
        outline: "none",
        border: "2px solid yellow",
        color: "yellow",
        fontSize: "1.25em",
        marginBottom: "10px"
    }

    const detailsInputStyles = {
        height: "50%",
        width: "250px",
        backgroundColor: "transparent",
        outline: "none",
        border: "2px solid yellow",
        color: "yellow",
        fontSize: "1.25em",
        marginBottom: "10px"
    }

    const editButtonStyles = {
        height: "45px",
        width: "250px",
        backgroundColor: "transparent",
        outline: "none",
        border: "2px solid green",
        color: "green",
        fontSize: "1.25em",
        cursor: "pointer"
    }

    const updateButtonStyles = {
        height: "45px",
        width: "250px",
        backgroundColor: "transparent",
        outline: "none",
        border: "2px solid yellow",
        color: "yellow",
        fontSize: "1.25em",
        cursor: "pointer"
    }

    return (
        <div style={containerStyles}>
            <div style={shitContainerStyles}>
                <h1 style={nameStyles}>{props.input.name}</h1>
                <h3 style={dateStyles}>{props.input.date}</h3>
                <h5 style={locationStyles}>{props.input.location}</h5>
                <p style={detailsContainer}>{props.input.details}</p>
                <button onClick={props.handleToggle} type="button" style={editButtonStyles}>EDIT</button>
            </div>
            <form onSubmit={props.handleSubmit} style={formStyles}>
                <input onChange={props.handleChange} type="text" name="name" value={props.input.name} style={nameInputStyles}/>
                <input onChange={props.handleChange} type="text" name="location" value={props.input.location} style={locationInputStyles}/>
                <textarea onChange={props.handleChange} name="details" value={props.input.details} style={detailsInputStyles}></textarea>
                <button type="submit" style={updateButtonStyles}>UPDATE</button>
            </form>
        </div>
    )
}
