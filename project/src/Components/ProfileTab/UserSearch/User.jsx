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
            <p className="User" onClick={this.onProfileClick} >{this.props.username}</p>
       )
   }
}
export default withRouter(User);