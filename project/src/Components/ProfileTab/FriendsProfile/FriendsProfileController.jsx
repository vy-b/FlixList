import React from 'react';
import FriendsProfileView from './FriendsProfileView'
class FriendsProfileController extends React.Component {
    render() {
        return(
            <div>
                <FriendsProfileView username={this.props.location.state.username}/>
            </div>
        )
    }
}

export default FriendsProfileController