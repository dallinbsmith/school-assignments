import React from 'react'

function Student(props){
    return(
        <div>
            <div className = "modal-title">
                <h3 className = "modal-title-side">BYU</h3>
                <h5 className = "modal-subtitle-left-side">STUDENT WORK</h5>
            </div>
            <div className = "modal-description-right">
                <h1 className = "modal-other-description">INDUSTRIAL DESIGN</h1>
                <h3 className = "modal-subdescription">INITIAL DESIGN EXPLORATION</h3>
            </div>
            <div className = "student-main-img"></div>
            <div className = "design-thumbs-container">
                <div className = "design-box"></div>
                <div onClick = {props._toggleClass1} className = {props.thumbActive1 ? 'thumb-enlarge student-thumbnail-1' : 'student-thumbnail-1'}></div>
                <div onClick = {props._toggleClass2} className = {props.thumbActive2 ? 'thumb-enlarge student-thumbnail-2' : 'student-thumbnail-2'}></div>
                <div onClick = {props._toggleClass3} className = {props.thumbActive3 ? 'thumb-enlarge student-thumbnail-3' : 'student-thumbnail-3'}></div>
                <div className = "thumb-hover-fade"></div>
            </div>
        </div>
    )
}


export default Student
