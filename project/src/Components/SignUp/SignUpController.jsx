import React from 'react';
import SignUpView from './SignUpView'
import axios from 'axios'
import {getUser} from '../../Utils/Utils';

class SignUpController extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            errorMessage:''
        }

    }


    sendSignUp=(signUpUser)=>{
        const {username,password,confirmPassword} = signUpUser;

        new Promise((resolve, reject) => {
            getUser(username).then( (response) => {
                if(response.data !== null){
                    this.setState({errorMessage: 'username taken'})
                    reject(this.state.errorMessage)
                }
                else if (password.length < 6){
                    this.setState({errorMessage: 'passwords must be 6 characters or more'})
                    reject(this.state.errorMessage)
                }
                else if(password !== confirmPassword){
                    this.setState({errorMessage: "passwords don't match"})
                    reject(this.state.errorMessage)
                }
                else{
                    resolve(axios.post('http://localhost:3001/signup', signUpUser))
                    this.redirectToHome();
                }    
            })
            }).catch( err => {
                console.log(err)
            });

    }
    
    redirectToHome = () => {
        this.props.history.push('/Login');
    }

    render() {
        return (
            <SignUpView onSignUp={this.sendSignUp} errorMessage={this.state.errorMessage}/>
        )
    }
}

export default SignUpController