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
        this.setState({errorMessage:'',success:''});
        const {rating,review} = userReview;
        if (rating === null){
            this.setState({errorMessage: 'A star rating out of five is required.'})
            return null;
        }
        const ratingTableEntry = new RatingTableEntry(this.props.imdbID,this.props.username,Number(rating),review);
        
        new Promise((resolve, reject) => {
        addRating(ratingTableEntry).then((response)=> {
            if (response.data.errors){
                if (response.data.errors.username){
                    this.setState({errorMessage: "You must log in before leaving a review."})
                }
                else if(response.data.errors.rating){
                    this.setState({errorMessage: 'A star rating out of five is required.'})
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