import React from 'react';
import SignUpView from './SignUpView'
import axios from 'axios'
import {getUser} from '../Utils/Utils';
// import Alert from 'react-bootstrap/Alert';

class SignUpController extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            errorMessage:'',
        }

    }


    sendSignUp=(signUpUser)=>{
        const {username,password,confirmPassword} = signUpUser;

        new Promise((resolve, reject) => {
            getUser(username).then( response => {
                if(response.length !== 0){
                    this.setState({errorMessage: 'username taken'})
                }
                else if(password !== confirmPassword){
                    this.setState({errorMessage: "passwords don't match"})
                }else if (password.length < 6){
                    this.setState({errorMessage: 'passwords must be 6 characters or more'})
                }
                else{
                    this.setState({errorMessage: 'success'})
                    resolve(axios.post('http://localhost:3001/signup', signUpUser))
                }    
            }).catch( err => {
                reject(err);
            });
        });
    }
    
    render() {
        return (
            <SignUpView onSignUp={this.sendSignUp} errorMessage={this.state.errorMessage} success={this.state.success}/>
        )
    }
}

export default SignUpController