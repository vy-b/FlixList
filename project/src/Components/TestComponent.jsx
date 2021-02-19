import React from 'react';
import RatingTableEntry from '../Objects/RatingTableEntry';
import {addRating, getRatings} from '../Utils/Utils';

class TestComponent extends React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        addRating(new RatingTableEntry('testId', 'bob', 4, 'Decent.'));
        getRatings('testId', ['testUsername', 'testUsername1', 'bob']).then( response => {
            console.log(response);
        }).catch(err => console.log(err));
    }
    
    render(){
        return( 
            <div className="App">
                <header className="App-header">
                    <button onClick={this.onSubmit}> Click to test connection to database.</button>
                </header>
            </div>
        )
    }

}

export default TestComponent
