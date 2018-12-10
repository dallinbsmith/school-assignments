import React from "react";
import { connect } from "react-redux";

function EditForm(props) {
    return (
        <div>
            <form name="select" onSubmit={props.handleSubmit}>
                <select name="memes">
                  {props.genMemes(props.memes)}
                </select>
                <button type="submit">SELECT</button>
            </form>
            {props.selectedMeme.ready ?
            (<form name="update" onSubmit={props.handleSubmit}>
                <input type="text" name="title" value={props.input.title} onChange={props.handleChange} />
                <input type="text" name="pictureUrl" value={props.input.pictureUrl} onChange={props.handleChange} />
                <button type="submit">UPDATE</button>
            </form>)
            : null}
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(EditForm);
