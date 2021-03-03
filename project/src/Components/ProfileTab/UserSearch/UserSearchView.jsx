import React from 'react';
import '.././ProfileTab.css'

class UserSearchView extends React.Component {
    state= {
        searchUser: ''
    }
    onSubmit = () => {
        const {searchUser} = this.state;
        this.props.onRequest(searchUser)
        this.setState({searchUser: ''})
    }
    onInput = (event) => {
        event.preventDefault();
        const searchUser = event.target.value;
        this.setState({searchUser});
    }
    render() {
        const {searchUser} = this.state;
        const {error, success} = this.props
        return (
            <div className="search">
                <input className="search-box" type="text" onChange={this.onInput} placeholder="Friend name" value={searchUser}/>
                <input className="button" type="submit" onClick={this.onSubmit} value="Add"/>  
                <div className="message">
                    <div className="error">{error}</div>
                    <div className="success">{success}</div>
                </div>
            </div>
        )
    }
}
export default UserSearchView;