import React from 'react';
import {getFriends} from '../Utils/Utils';

class TestComponent extends React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        getFriends('testUsername').then( response => {
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
