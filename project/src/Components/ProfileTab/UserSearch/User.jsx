import React from 'react';
import '.././ProfileTab.css'
import { withRouter } from "react-router-dom";
class User extends React.Component {
    onProfileClick = () => {
        this.props.history.push({
            pathname:"/FriendsProfile",
            state: {username: this.props.username}
        })
    }
   render() {
       return (
            <a href="/FriendsProfile" className="User" onClick={this.onProfileClick} >{this.props.username}</a>
       )
   }
}
export default withRouter(User);