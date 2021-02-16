import React from 'react';
import SignUpView from './SignUpView'
import axios from 'axios'
class SignUpController extends React.Component {
    sendSignUp=(signUpUser)=>{
        if (signUpUser.password !== signUpUser.confirmPassword){
            alert("passwords don't match");
        }
        else{
        axios.post('http://localhost:3001/signup', signUpUser)
        .then( (response) => console.log(response.data) );
        }
    }
    
    render() {
        return(
            <SignUpView onSignUp={this.sendSignUp}/>
        )
    }
}

export default SignUpController