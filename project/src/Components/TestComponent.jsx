import React from 'react';
import axios from 'axios';
import UserTableEntry from '../Objects/UserTableEntry'
import RatingTableEntry from '../Objects/RatingTableEntry'

class TestComponent extends React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        var user = new UserTableEntry('testUsername', 'testPassword');
        axios.post('http://localhost:3001/signup', user).then( (response) => {
            console.log(response.data);
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
