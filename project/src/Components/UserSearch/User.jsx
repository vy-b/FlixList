import React from 'react';
import './User.css'

class User extends React.Component {
   render() {
       return (
        <div className="User">
            <p>{this.props.username}</p>
        </div>
       )
   }
}
export default User;