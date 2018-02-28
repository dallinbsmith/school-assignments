import React from "react";

function ProjectNav(props){
    return(
        <div className = "project-nav-container">
            <div className = "project-nav-row">
                <div onClick = {props.frontendOpenModal} className = "frontend-container">
                    <div className = "project-nav-block frontend-icon"></div>
                        <h2 className = "frontend-h2">Frontend</h2>
                </div>
                <div onClick = {props.fullstackOpenModal} className = "fullstack-container">
                    <div className = "project-nav-block fullstack-icon"></div>
                    <h2 className = "fullstack-h2">Fullstack</h2>
                </div>
            </div>
            <div onClick = {props.uxOpenModal} className = "project-nav-row">
                <div className = "ux-container">
                    <div className = "project-nav-block ux-icon"></div>
                    <h2 className = "ux-h2">UX</h2>
                </div>
                <div onClick = {props.marketingOpenModal} className = "marketing-container">
                    <div className = "project-nav-block marketing-icon"></div>
                    <h2 className = "marketing-h2">Marketing</h2>
                </div>
            </div>
            <div onClick = {props.productionOpenModal} className = "project-nav-row">
                <div className = "production-container">
                    <div className = "project-nav-block production-icon"></div>
                    <h2 className = "production-h2">Production</h2>
                </div>
                <div onClick = {props.designOpenModal} className = "design-container">
                    <div className = "project-nav-block design-icon"></div>
                    <h2 className = "design-h2">Design</h2>
                </div>
            </div>
        </div>
    )
}
export default ProjectNav
