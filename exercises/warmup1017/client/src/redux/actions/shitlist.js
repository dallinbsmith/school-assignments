import axios from "axios";
let url = "http://localhost:10100/shitlist/"

export function getList() {
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: "LOAD_LIST",
                list: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    };
}

export function addShit(shitToAdd) {
    return (dispatch) => {
        axios.post(url, shitToAdd).then(response => {
            dispatch({
                type: "ADD_SHIT",
                added: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function deleteShit(id) {
    return (dispatch) => {
        axios.delete(url + id).then(response => {
            dispatch({
                type: "DELETE_SHIT",
                id
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function editShit(id, editedShit) {
    return (dispatch) => {
        axios.put(url + id, editedShit).then(response => {
            dispatch({
                type: "EDIT_SHIT",
                edited: response.data,
                id
            })
        }).catch(err => {
            console.log(err);
        });
    };
}
