import React from 'react';
import '.././ProfileTab.css'
import { withRouter } from "react-router-dom";
class User extends React.Component {
    onProfileClick = () => {
        this.props.history.push({
            pathname:"/FriendsProfile",
            state: {
                friendUsername: this.props.username,
                myUsername: this.props.myUsername
            }
        })
    }
   render() {
       return (
            <p className="User" onClick={this.onProfileClick} >{this.props.username}</p>
       )
   }
}
export default withRouter(User);