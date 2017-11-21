import React from "react";

export default function AddComponent(props) {
    const containerStyles = {
        marginBottom: "55px"
    }

    const formStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        width: "350px",
        height: "300px"
    }

    const inputStyles = {
        height: "35px",
        backgroundColor: "transparent",
        color: "green",
        outline: "none",
        fontSize: "1em",
        border: "2px solid green",
        paddingLeft: "15px"
    }

    const textAreaStyles = {
        height: "170px",
        backgroundColor: "transparent",
        color: "green",
        outline: "none",
        fontSize: "1em",
        border: "2px solid green",
        paddingLeft: "15px"
    }

    const buttonStyles = {
        height: "35px",
        backgroundColor: "transparent",
        color: "green",
        outline: "none",
        fontSize: "1.5em",
        border: "2px solid green"
    }

    return (
        <div style={containerStyles}>
            <h1 style={{color: "red"}}>ADD SHIT</h1>
            <form onSubmit={props.handleSubmit} style={formStyles}>
                <input onChange={props.handleChange} type="text" name="name" value={props.input.name} placeholder="Shit's name" style={inputStyles} class="add-input"/>
                <input onChange={props.handleChange} type="text" name="location" value={props.input.location} placeholder="Location: City, in the elevator, etc." style={inputStyles} class="add-input"/>
                <textarea onChange={props.handleChange} name="details" value={props.input.details} placeholder="Give us all the shitty details" style={textAreaStyles} class="add-input"></textarea>
                <button type="submit" style={buttonStyles}>ADD SHIT</button>
            </form>
        </div>
    )
}
