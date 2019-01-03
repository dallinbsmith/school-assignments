import React, { Component } from 'react';

class Profile extends Component {
    constructor(){
    super()
    this.state = {
        profile: null,
        error: ""
    }
    this.loadUserProfile = this.loadUserProfile.bind(this)
}
    componentDidMount (){
        this.loadUserProfile();
        console.log(this.state)
    }
        loadUserProfile(){
           this.props.auth.getProfile((profile,error) =>
            this.setState({ profile,error })
            ) 
        }  
    render() {
        const {profile} = this.state;
        if(!profile) return null;
        return (
            <>
            <div>
                <h1>Profile</h1>
                <p>{profile.nickname}</p>
                <img
                    src = {profile.picture}
                    alt = "profile pic"
                />
                <pre>{JSON.stringify(profile,null,2)}</pre>
            </div>
            </>
        );
    }
}

export default Profile;