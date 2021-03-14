import React from 'react';
import FriendsProfileView from './FriendsProfileView'
class FriendsProfileController extends React.Component {
    render() {
        return(
            <FriendsProfileView username={this.props.location.state.username}/>
        )
    }
}

export default FriendsProfileController