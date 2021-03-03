import React from 'react';
import FriendTableEntry from '../../../Objects/FriendTableEntry.jsx';
import { addFriend, getFriends } from '../../../Utils/Utils.jsx';
import User from "./User.jsx";
import UserSearchView from "./UserSearchView.jsx";

class UserSearchController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], error: '' };
    }

    componentDidMount(){
        getFriends(this.props.username).then((response) => {
            this.setState({users: response})
        })
    }

    sendRequest=(searchUser)=>{        
        const friendTableEntry = new FriendTableEntry(this.props.username, searchUser);
        addFriend(friendTableEntry).then((response) => {
            this.setState({error: 'User added!'});
            const addToList = this.state.users;
            addToList.push(searchUser);
            this.setState({users: addToList});
        }).catch(err => this.setState({error: err}));
    }

    render() {
        return(
            <div className = "App">
                <header className="friendSearch">
                <UserSearchView onRequest={this.sendRequest} error={this.state.error} />
                {
                this.state.users.map((searchUser, i) => {
                return <User username={searchUser} key={i}/>
                })
                }
                </header>
            </div>
        )
    }
}

export default UserSearchController
