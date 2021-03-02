import React from 'react';
import { getFriends } from '../Utils/Utils.jsx';
import User from "./User.jsx";
import UserSearchView from "./UserSearchView.jsx";

class UserSearchController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], error: '' };
    }

    sendRequest=(searchUser)=>{
        if (searchUser.length < 3){
            this.setState({error:'Please enter valid username'})
            return null;
        }
        else{
            const friendsList = getFriends(this.props.username);
            friendsList.filter((val) => {
                if (!users){
                    this.setState({error: 'User not found'})
                    return null;
                }
                else if (val.toLowerCase().includes(searchUser.toLowerCase())) {
                    this.setState({users:[], error:''})
                }
            })
        }
    };
}

    render() {
        return(
            <div className = "App">
                <header className="App-header">
                <UserSearchView onRequest={this.sendRequest} error={this.state.error}/>
                {
                this.state.users.map((searchUser, i) => {
                return <User {...searchUser} key={i}/>
                })
                }
                </header>
            </div>
        )
    }
}

export default UserSearchController
