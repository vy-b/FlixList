import React from 'react';
import "./ProfileTab.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSearchController from "./UserSearch/UserSearchController"
import ReviewCard from '../ReviewCard.jsx'
import {getRatings} from '../../Utils/Utils.jsx'

class ProfileTabView extends React.Component{
    constructor(props) {
        super(props);
        this.state = { reviews: [] };
    }
    componentDidMount() {
        const username = this.props.username;
            getRatings(undefined, username).then((userReviews) => {
                this.setState({reviews: userReviews});
            });
    }

    render(){
        return(
            <div>
                <header className = "profile">
                    <div className = "reviewcard">
                            {this.state.reviews.map((review, i) => {
                                if (i<10) return <ReviewCard review={review} key={i} />;
                            })}
                        </div>
                    <div className = "parent">
                        <div className = "name">{this.props.username}</div>
                        <div className = "friendSearch">
                            <div className = "friends">Friends List</div>
                            <div className = "friendList">
                                <UserSearchController username = {this.props.username} />
                            </div>
                        </div>
                    </div>
               </header>
            </div>
        )
    }
}

export default ProfileTabView