import React from 'react';
import UserReview from './UserReview.jsx'
class TestComponent extends React.Component {
    render(){
        return( 
            <div className="App">
                <header className="App-header">
                    <UserReview username={this.props.username} />
                </header>
            </div>
        )
    }

}

export default TestComponent
