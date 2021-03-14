import React from 'react';
import {getRatings} from '../../../Utils/Utils.jsx'
import ReviewCard from '../../ReviewCard.jsx'
class FriendsProfileView extends React.Component{
    constructor(props) {
        super(props);
        this.state = { reviews: [] };
    }

    componentDidMount() {
        const username = this.props.username;
            getRatings(undefined, username).then((reviews) => {
                this.setState({reviews: reviews});
        });
    }

    render(){
        return(
            <div className="App" >
                <header className="App-header">
                <h1 style={{marginTop:"20px"}}>{this.props.username}'s reviews</h1>
                {this.state.reviews.map((review, i) => {
                    return <ReviewCard review={review} key={i} />;
                })}
              </header>
            </div>
        )
    }
}

export default FriendsProfileView