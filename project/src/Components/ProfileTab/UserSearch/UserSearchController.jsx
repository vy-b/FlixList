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
            const mappedUsers = response.map(function(elem, i) {
                return {username: elem.toLowerCase(), key: i};
            })
            mappedUsers.sort(function(a, b) {
                if (a.username > b.username){
                    return 1;
                }
                else if (a.username < b.username){
                    return -1;
                }
                return 0;
            });
            const usersResult = mappedUsers.map(function(elem) {
                return response[elem.key];
            });
            this.setState({users: usersResult})
        })
    }

    sendRequest=(searchUser)=>{        
        const friendTableEntry = new FriendTableEntry(this.props.username, searchUser);
        addFriend(friendTableEntry).then((response) => {
            this.setState({error: '', success: `You are now following ${searchUser}`});
            const addToList = this.state.users;
            addToList.push(searchUser);
            this.setState({users: addToList});
        }).catch(err => this.setState({error: err, success: ''}));
    }

    render() {
        return(
            <div className = "App">
                <header className="searchUser">
                    <UserSearchView onRequest={this.sendRequest} error={this.state.error} success={this.state.success} />
                </header>
                <div className="listFriends">
                    {
                        this.state.users.map((searchUser, i) => {
                            return <User username={searchUser} key={i}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UserSearchController
