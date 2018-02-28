import React from "react";

import AvatarComponent from "./components/AvatarComponent"

class Avatar extends React.Component{
    constructor() {
        super()
        this.state = {
            friendsLikes: 0,
            friendsMessages: 0,
            friendsFriends: 0,
            leftBrowRotation: 0,
            rightBrowRotation: 0,
            avatarMouth: 0,
        }
        this.addFriends = this.addFriends.bind(this);
        this.addMessages = this.addMessages.bind(this);
        this.addLikes = this.addLikes.bind(this);
    }
        addFriends(){
        this.setState(prevState => ({
                ...prevState,
                friendsFriends: prevState.friendsFriends + 1,
        }));
            this.moveBrows()
    }
        addLikes(){
        this.setState(prevState => ({
                ...prevState,
                friendsLikes: prevState.friendsLikes + 1,
        }));
            this.moveBrows()
    }
        addMessages(){
        this.setState(prevState => ({
                ...prevState,
                friendsMessages: prevState.friendsMessages + 1,
        }));
            this.moveBrows()
    }
        moveBrows(){
        let total = this.state.friendsLikes + this.state.friendsMessages + this.state.friendsFriends
        if (total > -1 && total < 10){
            this.setState(prevState => ({
                leftBrowRotation: prevState.leftBrowRotation - 2,
                rightBrowRotation: prevState.rightBrowRotation + 2,
                avatarMouth: prevState.avatarMouth + 1,
        }));
            }
        }
    render() {
        return (
            <AvatarComponent
                friendsLikes={this.state.friendsLikes}
                friendsMessages={this.state.friendsMessages}
                friendsFriends={this.state.friendsFriends}
                leftBrowRotation = {this.state.leftBrowRotation}
                rightBrowRotation = {this.state.rightBrowRotation}
                avatarMouth = {this.state.avatarMouth}
                addFriends={this.addFriends}
                addLikes = {this.addLikes}
                addMessages = {this.addMessages}/>
        )
    }
}

export default Avatar
