import React from 'react'

function Blytzux(props){
    return(
        <div>
            <div className = "modal-title">
                <h3 className = "modal-title-side">BLYTZ</h3>
                <h5 className = "modal-subtitle-left-side">COLLAB WITH FACTORY6</h5>
            </div>
            <div className = "modal-description-right">
                <h1 className = "modal-other-description">UX/UI LAYOUTS</h1>
                <h3 className = "modal-subdescription">INITIAL LAYOUT DESIGN, ICON AND MENU DESIGN</h3>
            </div>
            <div className = "blytzux-comp"></div>
            <div className ="container-container">
            <div className = "design-thumbs-container">
                <div className = "design-box"></div>
                <div onClick = {props._toggleClass1} className = {props.thumbActive1 ? 'thumb-enlarge blytzux-thumbnail-1' : 'blytzux-thumbnail-1'}></div>
                <div onClick = {props._toggleClass2} className = {props.thumbActive2 ? 'thumb-enlarge blytzux-thumbnail-2' : 'blytzux-thumbnail-2'}></div>
                <div onClick = {props._toggleClass3} className = {props.thumbActive3 ? 'thumb-enlarge blytzux-thumbnail-3' : 'blytzux-thumbnail-3'}></div>
                <div onClick = {props._toggleClass4} className = {props.thumbActive4 ? 'thumb-enlarge blytzux-thumbnail-4' : 'blytzux-thumbnail-4'}></div>
            </div>
            </div>
        </div>
    )
}

export default Blytzux
