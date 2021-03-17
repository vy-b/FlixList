import React from 'react';
import SignUpView from './SignUpView'
import {getUser, addUser} from '../../Utils/Utils';

class SignUpController extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            errorMessage:''
        }

    }


    sendSignUp=(signUpUser)=>{
        const {username,password,confirmPassword} = signUpUser;
        getUser(username).then( (response) => {
            if(response.data !== null){
                this.setState({errorMessage: 'username taken'})
            }
            else if (password.length < 6){
                this.setState({errorMessage: 'passwords must be 6 characters or more'})
            }
            else if(password !== confirmPassword){
                this.setState({errorMessage: "passwords don't match"})
            }
            else{
                addUser(signUpUser).then(() => {
                    this.redirectToHome();
                }).catch(() => this.setState({errorMessage: "unknown error occured"}));
            }    
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