import React from 'react';
import UserReview from './UserReview'
import {addRating} from '../Utils/Utils';
import RatingTableEntry from '../Objects/RatingTableEntry.jsx';
class TestComponent extends React.Component {
    contructor(){

    }

    sendReview=(userReview)=>{
        const {rating,review} = userReview;
        const ratingTableEntry = new RatingTableEntry('testID',this.props.username,rating,review);
        addRating(ratingTableEntry);
        //note: since this uses the props username, it only works if you are logged in
    }

    render() {
        
        return (
            <div className="App">
                <header className="App-header">
                    <UserReview onReview={this.sendReview}/>
                </header>
            </div>
        )
    }
}

export default TestComponent
