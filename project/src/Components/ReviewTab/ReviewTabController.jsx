import React from 'react';
import ReviewTab from './ReviewTab'
class ReviewTabController extends React.Component {
    render() {
        return(
            <div className = "App">
                <header className="Review-header">
                    <ReviewTab username={this.props.username}/>
                </header>
            </div>
        )
    }
}

export default ReviewTabController
