import React from 'react';
import ProfileTabView from "./ProfileTabView";
import './ProfileTab.css'

class ProfileTabController extends React.Component{
    render(){
        return(
            <ProfileTabView username = {this.props.username} />
        )
    }
}

export default ProfileTabController