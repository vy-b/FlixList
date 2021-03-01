import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileTab.css";

class ProfileTabView extends React.Component{
    render(){
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