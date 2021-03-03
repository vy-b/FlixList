import React from 'react';
import UserReview from './UserReview'
import {addRating} from '../Utils/Utils';
import RatingTableEntry from '../Objects/RatingTableEntry.jsx';
import { withRouter } from 'react-router-dom';

class TestComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            errorMessage:''
        }
    }

    sendReview=(userReview)=>{
        const {rating,review} = userReview;
        const ratingTableEntry = new RatingTableEntry('testID',this.props.username,rating,review);
        this.setState({errorMessage:''});
        new Promise((resolve, reject) => {
        addRating(ratingTableEntry).then((response)=> {
            if (response.data.errors.username){
                this.setState({errorMessage: "You must log in before leaving a review."})
            }
            else if(response.data.errors.rating){
                this.setState({errorMessage: 'A star rating out of five is required.'})
                reject("no star rating");
            }
        })
    }).catch(err =>{
        console.log(err)
    })
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <UserReview onReview={this.sendReview} err={this.state.errorMessage}/>
                </header>
            </div>
        )
    }
}

export default withRouter(TestComponent)
