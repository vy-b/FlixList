import React from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileTabView from "./ProfileTabView";

class ProfileTabController extends React.Component{
    render(){
        console.log(this.props.username)
        return(
            <ProfileTabView username = {this.props.username} />
        )
    }
}

export default ProfileTabController