import axios from "cd ";

// ACTIONS \\
export function getMemes() {
    return (dispatch) => {
        axios
        .get("http://localhost:6100/memes")
        .then(response => {
            dispatch({
                type: "GET_MEMES",
                memes: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    };
}

export function addMeme(meme) {
    return (dispatch) => {
        axios
        .post("http://localhost:6100/admin", meme)
        .then(response => {
            dispatch({
                type: "ADD_MEME",
                memeAdded: response.data
            });
        })
        .catch(err => console.log(err));
    }
}

// get one meme
export function selectMeme(id) {
    return (dispatch) => {
        axios
        .get(`http://localhost:6100/memes/${id}`)
        .then(response => {
            dispatch({
                type: "SELECT_MEME",
                selectedMeme: response.data
            });
        })
        .catch(err => console.log(err));
    }
}

export function updateMeme(id, updatedMeme) {
    return (dispatch) => {
        axios
        .put(`http://localhost:6100/admin/${id}`, updatedMeme)
        .then(response => {
            dispatch({
                type: "UPDATE_MEME",
                updatedMeme: response.data
            });
        }).catch(err => console.log(err));
    };
}

// store url parameters in redux store to allow sidebar to access params, dynamically render user link options
export function getUrlParams(params) {
    return {
        type: "GET_URL_PARAMS",
        params
    }
}

// reset url parameters, selectedMeme for unmounting components
export function resetUrlParams() {
    return {
        type: "RESET_URL_PARAMS"
    }
}

export function resetSelectedMeme() {
    return {
        type: "RESET_SELECTED_MEME"
    }
}
/////////////////////

// UTILITIES \\
// Initial pricing/sizing settings -- update pricing with Action!
let can = [["12x12", 10.99], ["16x16", 14.99]];
let fram = [["10x10", 8.99], ["12x12", 10.99], ["14x14", 12.99], ["16x16", 14.99], ["18x18", 16.99]];
let unfram = [["10x10", 10.99], ["12x12", 12.99], ["14x14", 14.99], ["16x16", 16.99], ["18x18", 18.99]];

const canvas = new Map(can);
const framed = new Map(fram);
const unframed = new Map(unfram);
/////////////////////////////

// REDUCER \\
const state = {
    memes: [],
    selectedMeme: {
        meme: {},
        ready: false
    },
    urlParams: {},
    sizes: {
        canvas: canvas,
        framed: framed,
        unframed: unframed,
    },
    cart: {
        inCart: [],
        tax: 0.00,
        total: 0.00,
        shipping: 0.00
    }
};

export default function reducer(prevState = state, action) {
    switch(action.type) {
        case "GET_MEMES":
            return {
                ...prevState,
                memes: action.memes
            };

        case "ADD_MEME":
            const newMemes = [...prevState.memes];
            newMemes.push(action.memeAdded);
            return {
                ...prevState,
                memes: newMemes
            };

        case "SELECT_MEME":
            return {
                ...prevState,
                selectedMeme: {
                    ...prevState.selectedMeme,
                    meme: action.selectedMeme,
                    ready: true
                }
            };

        case "UPDATE_MEME":
            return {
                ...prevState,
                updatedMeme: action.updatedMeme
            };

        case "GET_URL_PARAMS":
            return {
                ...prevState,
                urlParams: action.params
            };

        case "RESET_URL_PARAMS":
            return {
                ...prevState,
                urlParams: {}
            };

        case "RESET_SELECTED_MEME":
            return {
                ...prevState,
                selectedMeme: {
                    meme: {},
                    ready: false
                }
            };

        default:
            return prevState;
    }
}
/////////////////////
