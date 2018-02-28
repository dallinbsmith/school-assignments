import React from 'react'

function Wicked(props){
    return(
        <div>
            <div className = "modal-title">
                <h3 className = "modal-title-side">WICKED AUDIO</h3>
                <h5 className = "modal-subtitle-left-side">AUDIO FAMILY</h5>
            </div>
            <div className = "modal-description-right">
                <h1 className = "modal-other-description">3D DESIGN</h1>
                <h3 className = "modal-subdescription">CONCEPTS, 3D DEVLOPMENT AND RENDERINGS</h3>
            </div>
            <div className = "wicked-main-img"></div>
            <div className = "design-thumbs-container">
                <div className = "design-box"></div>
                <div onClick = {props._toggleClass1} className = {props.thumbActive1 ? 'thumb-enlarge wicked-thumbnail-1' : 'wicked-thumbnail-1'}></div>
                <div onClick = {props._toggleClass2} className = {props.thumbActive2 ? 'thumb-enlarge wicked-thumbnail-2' : 'wicked-thumbnail-2'}></div>
                <div onClick = {props._toggleClass3} className = {props.thumbActive3 ? 'thumb-enlarge wicked-thumbnail-3' : 'wicked-thumbnail-3'}></div>
                <div onClick = {props._toggleClass4} className = {props.thumbActive4 ? 'thumb-enlarge wicked-thumbnail-4' : 'wicked-thumbnail-4'}></div>
            </div>
        </div>
    )
}


export default Wicked
