import React from 'react'

function Klim(props){
    return(
        <div>
            <div className = "modal-title">
                <h3 className = "modal-title-side">KLIM</h3>
                <h5 className = "modal-subtitle-left-side">JR DESIGNER</h5>
            </div>
            <div className = "modal-description-right">
                <h1 className = "modal-other-description">SOFT GOODS DESIGN</h1>
                <h3 className = "modal-subdescription">GRAPHICS, DEVELOPMENT AND DESIGN</h3>
            </div>
            <div className = "klim-main-img"></div>
            <div className = "design-thumbs-container">
                <div className = "design-box"></div>
                <div onClick = {props._toggleClass1} className = {props.thumbActive1 ? 'thumb-enlarge klim-thumbnail-1' : 'klim-thumbnail-1'}></div>
                <div onClick = {props._toggleClass2} className = {props.thumbActive2 ? 'thumb-enlarge klim-thumbnail-2' : 'klim-thumbnail-2'}></div>
                <div onClick = {props._toggleClass3} className = {props.thumbActive3 ? 'thumb-enlarge klim-thumbnail-3' : 'klim-thumbnail-3'}></div>
            </div>
        </div>
    )
}


export default Klim
