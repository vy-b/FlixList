import React from 'react';
import {getFriends, getRatings} from '../../Utils/Utils.jsx'
import ReviewCard from '../ReviewCard.jsx'
class BrowseTabView extends React.Component{
    constructor(props) {
        super(props);
        this.state = { reviews: [] };
    }

    componentDidMount() {
        const username = this.props.username;
        getFriends(username).then((friendsList) => {
            getRatings(undefined, friendsList).then((friendreviews) => {
                this.setState({reviews: friendreviews});
            });
        });
    }

    render(){
        return(
            <div className="App" >
                <header className="App-header">
                <h1 style={{marginTop:"20px"}}> What your friends reviewed recently: </h1>
                {this.state.reviews.map((review, i) => {
                    return <ReviewCard review={review} key={i} />;
                })}
              </header>
            </div>
        )
    }
}

export default BrowseTabView