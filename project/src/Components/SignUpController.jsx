import React from 'react';
import SignUpView from './SignUpView'
import axios from 'axios'
import {getUser} from '../Utils/Utils';

class SignUpController extends React.Component {

    sendSignUp=(signUpUser)=>{
        const {username,password,confirmPassword} = signUpUser;
        console.log(username,password,confirmPassword)

        new Promise((resolve, reject) => {
            getUser(username).then( response => {
                if(response.length !== 0){
                    console.log(response.length)
                    reject("username already exists");
                }else if(password !== confirmPassword){
                    reject("passwords don't match");
                }else if (password.length < 6){
                    reject("password length < 6")
                }
                else{
                    resolve(axios.post('http://localhost:3001/signup', signUpUser)
                    .then( (response) => console.log(response.data) ) )
                }    
            }).catch( err => {
                reject(err);
            });
        });

    }
    
    render() {
        return(
            <SignUpView onSignUp={this.sendSignUp}/>
        )
    }
}

export default SignUpController