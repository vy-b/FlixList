import React from 'react';
import axios from 'axios';

class TestComponent extends React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        const registered = {
            username: "TestUsername123",
            password: "TestPassword123"
        }
        axios.post('http://localhost:3001/signup', registered).then( (response) => {
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
