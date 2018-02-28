import React from 'react'

function Kickstarter(){
    return(
        <div>
            <div className = "marketing-texture"></div>
            <div className = "modal-title">
                <h3 className = "modal-title-side">TRIMR</h3>
                <h5 className = "modal-subtitle-left-side">MARKETING DIRECTOR</h5>
            </div>
            <div className = "modal-description-right">
                <h1 className = "modal-other-description">KICKSTARTERS</h1>
                <h3 className = "modal-subdescription">CREATION OF VIDEO AND PHOTO CONTENT, MARKETING DISTRIBUTION, FULFILLMENT </h3>
            </div>
            <div className = "kickstarter-main-img"></div>
            <div className = "kickstarter-icons">
                <div className = "marketing-row">
                    <a href="https://www.kickstarter.com/projects/trimr/trimr-water-shaker-bottle" className = "kickstarter-duo anchor-stuff">.</a>
                    <a href="https://www.kickstarter.com/projects/trimr/the-all-in-gym-bag-separate-your-dry-and-wet-gym-c" id = "kickstarterGymbag anchor-stuff" className = "kickstarter-gymbag">.</a>
                    <a href="https://www.kickstarter.com/projects/trimr/cask-the-insulated-bottle-crafted-from-inspiration" className = "kickstarter-cask">.</a>
                </div>
                <div className = "marketing-row-icons">
                    <h4 className ="duo-text">DUO CLASSIC</h4>
                    <h4 className ="gymbag-text">ALL-IN GYMBAG</h4>
                    <h4 className ="cask-text">CASK</h4>
                </div>
            </div>
        </div>
    )
}

export default Kickstarter
