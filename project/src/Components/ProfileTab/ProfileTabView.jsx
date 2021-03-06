import React from 'react';
import "./ProfileTab.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSearchController from "./UserSearch/UserSearchController"

class ProfileTabView extends React.Component{
    render(){
        return(
            <div>
                <header className = "profile">
                    <div className = "parent">
                        <div className = "name">{this.props.username}</div>
                        <div className = "friendSearch">
                            <div className = "friends">Friends List</div>
                            <UserSearchController username = {this.props.username} />
                        </div>
                    </div>
               </header>
            </div>
        )
    }
}

export default ProfileTabView