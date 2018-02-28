import React from 'react'

function Superheroic(props){
    return(
        <div>
            <div className = "superheroic-texture"></div>
            <div className = "modal-title-exception">
                <h3 className = "superheroic-title">SUPERHEROIC</h3>
                <h5 className = "superheroic-subtitle">COLLAB WITH WELIKESMALL</h5>
            </div>
            <div className = "modal-description-left">
                <h1 className = "modal-other-description mod-super">FRONTEND DEV IN SHOPIFY</h1>
                <h3 className = "superheroic-subdescription">ACCESSORIES, PRODUCT, NAVBARS AND MOBILE</h3>
            </div>
            <div className = "go-there-container">
                <a href = "https://superheroic.com/products/tmblr-v1" className = "contact-icons go-there">.</a>
            </div>
            <div className = "superheroic-shoe"></div>
            <div className = "superheroic-modal-thumbnail-container">
                <div onClick = {props._toggleClass3} className = {props.thumbActive3 ? 'superheroic-thumb3-enlarge superheroic-thumbnail-3' : 'superheroic-thumbnail-3'}></div>
                <div onClick = {props._toggleClass1} className = {props.thumbActive1 ? 'thumb-enlarge superheroic-thumbnail-1' : 'superheroic-thumbnail-1'}></div>
                <div onClick = {props._toggleClass2} className = {props.thumbActive2 ? 'thumb-enlarge superheroic-thumbnail-2' : 'superheroic-thumbnail-2'}></div>
            </div>
        </div>
    )
}

export default Superheroic
