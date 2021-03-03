import React from 'react';
import FriendTableEntry from '../../../Objects/FriendTableEntry.jsx';
import { addFriend, getFriends } from '../../../Utils/Utils.jsx';
import User from "./User.jsx";
import UserSearchView from "./UserSearchView.jsx";

class UserSearchController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], error: '', success: '' };
    }

    componentDidMount(){
        getFriends(this.props.username).then((response) => {
            this.setState({users: response})
        })
    }

    sendRequest=(searchUser)=>{        
        const friendTableEntry = new FriendTableEntry(this.props.username, searchUser);
        addFriend(friendTableEntry).then((response) => {
            if (this.state.error !== ''){
                this.setState({error: ''});
            }
            this.setState({success: 'You are now following ' + searchUser});
            const addToList = this.state.users;
            addToList.push(searchUser);
            this.setState({users: addToList});
        }).catch(err => this.setState({success: '', error: err}));
    }

    render() {
        return(
            <div className = "App">
                <header className="friendSearch">
                <UserSearchView onRequest={this.sendRequest} error={this.state.error} success={this.state.success} />
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
