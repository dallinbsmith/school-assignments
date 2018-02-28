import React from "react";
import glamorous from "glamorous";

function AvatarComponent(props){

    ////// PHOTOS FOR ANIMATED PARTS \\\\\\\
    const leftBrow = require("../../../assets/avatar/left-eyebrow.png");
    const rightBrow = require("../../../assets/avatar/right-eyebrow.png")

    const LeftEyebrow = glamorous.div({
        background: `url(${leftBrow}) no-repeat center`,
        backgroundSize: "contain",
        position: "relative",
        width: "7%",
        top: "50%",
        height: "12px",
        left: "calc(40% - 5px)",
        transform: `rotate(${props.leftBrowRotation}deg)`,
    });
    const RightEyebrow = glamorous.div({
        background: `url(${rightBrow}) no-repeat center`,
        backgroundSize: "contain",
        position: "relative",
        width: "7%",
        top: "23%",
        height: "12px",
        left: "calc(52% - 5px)",
        transform: `rotate(${props.rightBrowRotation}deg)`,
    });

    return(
        <div className = "avatar-component">
            <div className = "avatar-intro-box"></div>
            <div className = "avatar-holder">
                <img className = "quote-box" src={require("../../../assets/avatar/quote-box.png")} alt = "quote-box"></img>
                <div className = "eyebrows">
                    <LeftEyebrow/>
                    <RightEyebrow/>
                </div>
                <div className = "icon-container">
                    <img onClick = {props.addMessages} className = "message-icon" src={require("../../../assets/avatar/message-icon.png")} alt = "message-icon"></img>
                    <h4 className = "avatarh4 avh41">{props.friendsMessages}</h4>
                    <img onClick = {props.addLikes} className = "heart-icon" src={require("../../../assets/avatar/heart-icon.png")} alt = "heart-icon"></img>
                    <h4 className = "avatarh4 avh42">{props.friendsLikes}</h4>
                    <img onClick = {props.addFriends} className = "friend-icon" src={require("../../../assets/avatar/friend-icon.png")} alt = "friend-icon"></img>
                    <h4 className = "avatarh4 avh43">{props.friendsFriends}</h4>
                </div>
                <img className = "avatar-pic" src={require("../../../assets/avatar/Dallin_Avatar.png")} alt = "dallin-avatar"></img>
                <div className = "mouth-container">
                    <img className = "avatar-mouth" src={require(`../../../assets/smiles/smile-lvl-${props.avatarMouth}.png`)} alt = "avatar-mouth"></img>
                </div>
                <div className = "avatar-buttons-container">
                    <div onClick = {props.addLikes} className = "make-likes"></div>
                    <div onClick = {props.addFriends} className = "make-friends"></div>
                </div>
            </div>
        </div>
    )
}

export default AvatarComponent;
