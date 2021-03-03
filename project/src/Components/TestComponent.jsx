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
        console.log(addRating(ratingTableEntry));
        console.log(ratingTableEntry);

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
