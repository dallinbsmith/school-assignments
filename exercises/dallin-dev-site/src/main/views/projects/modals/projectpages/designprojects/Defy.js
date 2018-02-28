import React from 'react'

function Defy(props){
    return(
        <div>
            <div className = "modal-title">
                <h3 className = "modal-title-side">DEFY</h3>
                <h5 className = "modal-subtitle-left-side">WATER FLIGHT JETBOARD</h5>
            </div>
            <div className = "modal-description-right">
                <h1 className = "modal-other-description">FORM DESIGN</h1>
                <h3 className = "modal-subdescription">INSPIRATION AND INITIAL CONCEPTS </h3>
            </div>
            <div className = "defy-main-img"></div>
            <div className = "defy-thumbnail-container">
                <div className = "design-box-2"></div>
                <div onClick = {props._toggleClass1} className = {props.thumbActive1 ? 'thumb-enlarge defy-thumbnail-1' : 'defy-thumbnail-1'}></div>
                <div onClick = {props._toggleClass2} className = {props.thumbActive2 ? 'thumb-enlarge defy-thumbnail-2' : 'defy-thumbnail-2'}></div>
                <div onClick = {props._toggleClass3} className = {props.thumbActive3 ? 'defy-thumb3-enlarge' : 'defy-thumbnail-3'}></div>
            </div>
        </div>
    )
}


export default Defy
