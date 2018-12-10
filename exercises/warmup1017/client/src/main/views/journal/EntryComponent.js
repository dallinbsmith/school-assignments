import React from "react";

export default function EntryComponent(props) {
    const containerStyles = {
        display: "flex",
        flexDirection: "column",
        width: "65%",
        padding: "25px"
    }

    const formStyles = {
        display: "flex",
        flexDirection: "column"
    }

    const startButtonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "2px solid yellow",
        color: "yellow",
        fontSize: "1.5em",
        marginTop: "10px",
        cursor: "pointer"
    }

    const saveButtonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "2px solid white",
        color: "white",
        fontSize: "1.5em",
        width: "155px",
        marginTop: "25px",
        cursor: "pointer"
    }
    const deleteButtonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "2px solid white",
        color: "white",
        fontSize: "1.5em",
        width: "155px",
        marginTop: "25px",
        marginLeft: "15px",
        cursor: "pointer",
        marginRight: "55px"
    }

    const titleInputStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "none",
        border: "2px solid white",
        color: "white",
        fontSize: "1.5em",
        marginTop: "25px",
        padding: "10px"
    }

    const entryTextStyles = {
        outline: "none",
        backgroundColor: "transparent",
        color: "white",
        height: "65vh",
        border: "none",
        fontSize: "1em",
        padding: "15px",
        border: "2px solid white",
        marginTop: "25px",
        overflow: "scroll"
    }

    const buttonContainerStyles = {
        alignSelf: "flex-end"
    }

    const lockStyles = {
        color: "grey"
    }

    return (
        <div style={containerStyles}>
            <h1>HELLO, THERE. TELL ME YOUR SECRETS...</h1>
            <button onClick={props.handleStart} type="button" style={startButtonStyles}>START NEW ENTRY</button>
            <form id="entry-form" onSubmit={props.handleSave} style={formStyles} disabled>
                <input onChange={props.handleChange} type="text" name="title" value={props.input.title} placeholder="ENTRY TITLE..." style={titleInputStyles}/>
                <textarea onChange={props.handleChange} name="text" placeholder="LET IT OUT..." value={props.input.text} style={entryTextStyles}></textarea>
                <div style={buttonContainerStyles}>
                    <button id="delete-button" onClick={props.handleDelete} type="button" style={deleteButtonStyles}>DELETE ENTRY</button>
                    <button id="save-button" type="submit" style={saveButtonStyles} disabled>SAVE ENTRY</button>
                </div>
            </form>
        </div>
    )
}
