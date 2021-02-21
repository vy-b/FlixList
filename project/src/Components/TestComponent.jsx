import React from 'react';
import {getMovieDetails} from '../Utils/Utils';

class TestComponent extends React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        getMovieDetails("tt0848228").then( res => console.log(res));
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
