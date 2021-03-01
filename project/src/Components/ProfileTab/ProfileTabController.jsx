import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileTabView from "./ProfileTabView";

class ProfileTabController extends React.Component{
    render(){
        return(
            <ProfileTabView username = {this.props.username} />
        )
    }
}

export default ProfileTabController