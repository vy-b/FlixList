import React from 'react';
import RatingTableEntry from '../Objects/RatingTableEntry';
import {addRating} from '../Utils/Utils';

class TestComponent extends React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        const rating = new RatingTableEntry('testId', 'testUsername', 5, 'Good movie.');
        addRating(rating).then( response => {
            console.log(response);
        });
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
