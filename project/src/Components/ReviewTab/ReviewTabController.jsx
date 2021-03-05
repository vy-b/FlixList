import React from 'react';
import ReviewTab from './ReviewTab'
class ReviewTabController extends React.Component {
    render() {
        return(
            <div className = "App">
                    <ReviewTab username={this.props.username}/>
            </div>
        )
    }
}

export default ReviewTabController
