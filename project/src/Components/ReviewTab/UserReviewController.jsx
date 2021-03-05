import React from 'react';
import UserReview from './UserReview'
import {addRating} from '../../Utils/Utils';
import RatingTableEntry from '../../Objects/RatingTableEntry.jsx';
class UserReviewController extends React.Component {
    constructor(){
    super();
    this.state = {
        errorMessage:'',
        success:''
    }
    }

    sendReview=(userReview)=>{
        const {rating,review} = userReview;
        const ratingTableEntry = new RatingTableEntry(this.props.imdbID,this.props.username,rating,review);
        this.setState({errorMessage:'',success:''});
        new Promise((resolve, reject) => {
        addRating(ratingTableEntry).then((response)=> {
            console.log(response);
            if (response.data.errors){
                if (response.data.errors.username){
                    this.setState({errorMessage: "You must log in before leaving a review."})
                }
                else if(response.data.errors.rating){
                    this.setState({errorMessage: 'A star rating out of five is required.'})
                    reject("no star rating");
                }
            }
            else{
                this.setState({success:'Your review has been posted!'})
            }
        })
    }).catch(err =>{
        console.log(err)
    })
    }

render(){
    return(
    <div>
        <UserReview onReview={this.sendReview} err={this.state.errorMessage} success={this.state.success}/>
    </div>
    );
}
}

export default UserReviewController