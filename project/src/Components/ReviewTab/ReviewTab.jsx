import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import UserReviewController from './UserReviewController';
import { getFriends, getRatings } from '../../Utils/Utils.jsx';
import FriendReviews from "./FriendReviews.jsx";
import './ReviewTab.css'
class ReviewTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = { reviews: [],ratingsOnly:[],myRating:[] };
    }

    componentDidMount(){
        const username=this.props.username;
        const imdbID=this.props.location.state.movieInfo.imdbID;
        getFriends(username).then((friendsList) => {
            console.log("my friends",username,friendsList);
            getRatings(imdbID, friendsList).then((friendreviews) =>{
            friendreviews.forEach(response => {
                if(response.rating.review!==''){
                    this.setState({reviews:[...this.state.reviews,response]})
                }
                else if (response.rating.review===''){
                    this.setState({ratingsOnly:[...this.state.ratingsOnly,response]})
                }
            });
        }
        
        )
    })
        // get my rating
        getRatings(imdbID,username).then((myRating) =>{
            myRating.forEach(response => {
                this.setState({myRating:[...this.state.myRating,response]});
            })
            
        })
    }
    
    render(){
        const {title, poster, year,plot,rated} = this.props.location.state.movieInfo;
        console.log(this.state.reviews);
        console.log(this.state.myRating)
        return (
            <div className = "App">
                <header className = "Review-header">
                <div className="row no-gutters">
                    <div className="col-auto">
                    <div className="card-block px-2" style={{marginRight:"10px"}}>
                        <img className="poster" src={poster} alt="movie cover"/>
                    
                    </div>
                    </div>
                    <div className="col">
                        <div className="card-block" >
                            <h1 className="title">{title}</h1>
                            <h5 className="text-muted"><span className="year">{year}</span> | <span className="rated">{rated}</span></h5>
                            <p className="plot" >{plot}</p>
                            <UserReviewController imdbID={this.props.location.state.movieInfo.imdbID} username={this.props.username}/>
                            
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-auto">
                    <div className="card-block ratings" >
                        {this.state.ratingsOnly.map((review, i) => {
                            return <FriendReviews review={review} key={i}/>
                        })}
                    </div>
                    </div>
                    
                    <div className="col">
                        <div className="card-block reviews" >
                            {this.state.myRating!==[]
                            ? this.state.myRating.map((review, i) => {
                                return <FriendReviews review={review} key={i}/>
                            })
                            :undefined
                            }
                            {this.state.reviews.map((review, i) => {
                                return <FriendReviews review={review} key={i}/>
                            })}
                            </div></div>
                            </div>

                
                </header>
            </div>
           )
    }
}

export default withRouter(ReviewTab)