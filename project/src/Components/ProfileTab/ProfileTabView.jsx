import React from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileTab.css";

class ProfileTabView extends React.Component{
    render(){
        console.log(this.props.username)
        return(
            <div>
                <header className = "App-header">
                    <div className = "name">{this.props.username}</div>
                </header>
            </div>
        )
    }
}

export default ProfileTabView