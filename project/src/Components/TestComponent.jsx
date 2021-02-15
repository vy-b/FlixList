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
        var test = new UserTableEntry('testUsername', 'testPassword');
        var test2 = new RatingTableEntry('ID123', 'bob', 8, 'Good movie.');
        console.log(test2);
        axios.post('http://localhost:3001/signup', test).then( (response) => {
            console.log(response.data);
        });
    }
    
    render(){
        return <button onClick={this.onSubmit}> Click to test connection to database.</button>
    }

}

export default TestComponent
