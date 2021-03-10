import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "@material-ui/lab/Rating";
import Star from "@material-ui/icons/Star";
import "./ReviewTab.css";
import { withRouter } from "react-router-dom";
import UserReviewController from "./UserReviewController";
import { getFriends, getRatings } from "../../Utils/Utils.jsx";
import FriendReviews from "./FriendReviews.jsx";

class ReviewTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], ratingsOnly: [], myRating: [] };
  }

  componentDidMount() {
    const username = this.props.username;
    const imdbID = this.props.location.state.movieInfo.imdbID;
    getFriends(username).then((friendsList) => {
      getRatings(imdbID, friendsList).then((friendreviews) => {
        let reviewArr = [];
        let ratingsArr = [];
        friendreviews.forEach((response) => {
          if (response.rating.review !== "") {
            reviewArr.push(response);
          } else {
            ratingsArr.push(response);
          }
        });
        this.setState({reviews: reviewArr, ratingsOnly: ratingsArr});
      });
    });
    // get my rating
    getRatings(imdbID, username).then((myRating) => {
      myRating.forEach((response) => {
        this.setState({ myRating: [...this.state.myRating, response] });
      });
    });
  }

  render() {
    const {
      title,
      poster,
      year,
      plot,
      rated,
      totalRating,
      totalUsersRated,
      imdbID
    } = this.props.location.state.movieInfo;
    const movieRating = totalRating / totalUsersRated;
    return (
      <div className="App ">
        <header className="Review-header">
          <div className="row no-gutters review-page">
            <div className="col-auto">
              <div className="card-block px-2" style={{ marginRight: "10px" }}>
                <img className="movie-poster" src={poster} alt="movie cover" />

                <div style={{ marginTop: "13px" }}>
                  {this.state.ratingsOnly.map((review, i) => {
                    return <FriendReviews review={review} key={i} />;
                  })}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card-block " style={{ marginTop: "10px" }}>
                <h1 className="title">{title}</h1>
                <h5 className="text-muted">
                  <span className="year">{year}</span> |{" "}
                  <span className="rated">{rated}</span>
                </h5>

                <Rating
                  name="half-rating-read"
                  value={movieRating}
                  precision={0.5}
                  emptyIcon={
                    <Star style={{ color: "grey" }} fontSize="inherit" />
                  }
                  readOnly
                />
                <p className="text-muted" style={{ fontSize: "16px" }}>
                  (from {totalUsersRated} total ratings)
                </p>

                <p className="plot">{plot}</p>

                <UserReviewController
                  imdbID={imdbID}
                  username={this.props.username}
                />

                <div style={{ marginTop: "14px" }}>
                  {this.state.myRating.map((review, i) => {
                    return <FriendReviews review={review} key={i} />;
                  })}

                  {this.state.reviews.map((review, i) => {
                    return <FriendReviews review={review} key={i} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(ReviewTab);