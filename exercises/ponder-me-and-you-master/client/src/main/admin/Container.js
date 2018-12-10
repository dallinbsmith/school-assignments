import React from "react";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { connect } from "react-redux";
import { getMemes, addMeme, selectMeme } from "../redux/products";

class AddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            add: {
                title: "",
                pictureUrl: ""
            },
            update: {
                title: "",
                pictureUrl: ""
            },
            toggle: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.genMemesToSelect = this.genMemesToSelect.bind(this);
    }

    handleChange(event) {
        event.persist();
        const formName = event.target.parentElement.name;
        const inputName = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                [formName]: {
                    ...prevState[formName],
                    [inputName]: newValue
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (event.target.name === "add") {
            // this.props.addMeme(this.state);
            console.log("add-meme");
        } else if (event.target.name === "select") {
            this.props.selectMeme(event.target.memes.selectedOptions[0].id);
        } else if (event.target.name === "update") {
            console.log("update-meme")
        }

        this.setState({
            add: {
                title: "",
                pictureUrl: ""
            },
            update: {
                title: "",
                pictureUrl: ""
            }
        });
    }

    genMemesToSelect(memes) {
        return memes.map(meme => {
            return (
                <option id={meme._id} key={meme._id}>{meme.title}</option>
            )
        });
    }

    componentDidMount() {
        this.props.getMemes();
    }

    render() {
        console.log(this.state.add);
        // console.log(this.state.update);
        // console.log(this.props.selectedMeme.meme.title);
        return (
            <div>
                <AddForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    input={this.state.add}/>
                <EditForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleEdit={this.handleEditInput}
                    genMemes={this.genMemesToSelect}
                    input={this.state.update}
                    wantToEdit={this.state.toggle}/>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getMemes, addMeme, selectMeme })(AddContainer);
