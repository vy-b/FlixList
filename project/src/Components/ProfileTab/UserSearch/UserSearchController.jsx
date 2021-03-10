import React from 'react';
import FriendTableEntry from '../../../Objects/FriendTableEntry.jsx';
import { addFriend, getFriends } from '../../../Utils/Utils.jsx';
import User from "./User.jsx";
import UserSearchView from "./UserSearchView.jsx";

class UserSearchController extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { users: [], error: '', success: '' };
    }



    componentDidMount(){
        this._isMounted = true;
        getFriends(this.props.username).then((response) => {
            const sorted = response.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
            if(this._isMounted){
                this.setState({users: sorted})
            }
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    sendRequest=(searchUser)=>{        
        const friendTableEntry = new FriendTableEntry(this.props.username, searchUser);
        addFriend(friendTableEntry).then((response) => {
            this.setState({error: '', success: `You are now following ${searchUser}`});
            const addToList = this.state.users;
            addToList.push(searchUser);
            const sorted = addToList.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
            if(this._isMounted){
                this.setState({users: sorted});
            }
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
