import axios from "axios";

const url = "http://localhost:10100/journal/";

export function saveEntry(id, entry) {
    return (dispatch) => {
        axios.put(url + id, entry).then(response => {
            dispatch({
                type: "SAVE_ENTRY",
                savedEntry: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    };
}

export function startEntry(entry) {
    return (dispatch) => {
        axios.post(url, entry).then(response => {
            dispatch({
                type: "START_ENTRY",
                startedEntry: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

export function deleteEntry(id) {
    return (dispatch) => {
        axios.delete(url + id).then(response => {
            dispatch({
                type: "DELETE_ENTRY",
                id
            });
        }).catch(err => {
            console.log(err);
        });
    }
}
