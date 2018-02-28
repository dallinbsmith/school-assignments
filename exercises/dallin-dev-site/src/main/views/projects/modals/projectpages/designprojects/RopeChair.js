import React from 'react'

function Ropechair(props){
    return(
        <div>
            <div className = "ropechair-main-img"></div>
            <div className = "modal-title">
                <h3 className = "modal-title-side">ROPE CHAIR</h3>
                <h5 className = "modal-subtitle-left-side">PASSION PROJECT</h5>
            </div>
            <div className = "modal-description-right">
                <h1 className = "modal-other-description">VIRAL PRODUCT MARKETING</h1>
                <h3 className = "modal-subdescription">DESIGN, CONTENT CREATION, VIRAL MARKETING</h3>
            </div>
            <div className = "design-thumbs-container">
                <div className = "design-box">
                    <h4 className = "amazon-bullet-header">12 MILLION VIEWS</h4>
                    <h5 className = "amazon-bullet">Featured on Front Page of Reddit, Yahoo, CNN, AOL, Huffington Post, Inside Edition and others</h5>
                </div>
                <div onClick = {props._toggleClass1} className = {props.thumbActive1 ? 'thumb-enlarge ropechair-thumbnail-1' : 'ropechair-thumbnail-1'}></div>
                <div onClick = {props._toggleClass2} className = {props.thumbActive2 ? 'thumb-enlarge ropechair-thumbnail-2' : 'ropechair-thumbnail-2'}></div>
                <div className = "thumb-hover-fade"></div>
            </div>
        </div>
    )
}


export default Ropechair
