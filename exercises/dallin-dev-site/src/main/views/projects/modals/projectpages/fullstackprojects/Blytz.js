import React from 'react'

function Blytz(props){
    return(
        <div>
            <div className = "blytz-texture"></div>
            <div className = "modal-title-exception">
                <h3 className = "modal-title-side">BLYTZ</h3>
                <h5 className = "modal-subtitle-left-side">COLLAB WITH FACTORY6</h5>
            </div>
            <div className = "modal-description-left">
                <h1 className = "modal-other-description">DATABASE PROTOTYPES</h1>
                <h3 className = "modal-subdescription">BACKEND, MONGO, REACT AND FRONTEND</h3>
            </div>
            <div className = "go-there-container">
                <a href = "https://github.com/dallinbsmith/dashboard" className = "contact-icons go-there"></a>
            </div>
            <div className = "blytz-hand"></div>
            <div className = "modal-thumbnail-container">
                <div onClick = {props._toggleClass1} className = {props.thumbActive1 ? 'thumb-enlarge blytz-thumbnail-1' : 'blytz-thumbnail-1'}></div>
                <div onClick = {props._toggleClass2} className = {props.thumbActive2 ? 'thumb-enlarge blytz-thumbnail-2' : 'blytz-thumbnail-2'}></div>
            </div>
        </div>
    )
}

export default Blytz
