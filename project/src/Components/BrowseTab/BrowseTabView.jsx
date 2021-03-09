import React from 'react';
import {getFriends, getRatings} from '../../Utils/Utils.jsx'
import ReviewCard from '../ReviewCard.jsx'
class BrowseTabView extends React.Component{
    constructor(props) {
        super(props);
        this.state = { reviews: [] };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ show: true}), 1000)
        let reviewArr = [];
        const username = this.props.username;
        getFriends(username).then((friendsList) => {
            getRatings(undefined, friendsList).then((friendreviews) => {
                friendreviews.forEach((response) => {
                    reviewArr.push(response);
                });
            });
            this.setState({reviews: reviewArr});
        });
        
    }

    render(){
        return(
            <div className="App" >
                <header className="App-header">
                {this.state.reviews.map((review, i) => {
                    return <ReviewCard review={review} key={i} />;
                })}
              </header>
            </div>
        )
    }
}

export default BrowseTabView