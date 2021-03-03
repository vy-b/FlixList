import React from 'react';
import LoginView from './LoginView'
import {getUser} from '../../Utils/Utils';
import { withRouter } from 'react-router-dom';

class LoginController extends React.Component {
    constructor(){
        super()
        this.state = {
            errorMessage:''
        }
    }

    sendLogin=(loginUser)=>{
        const {username,password} = loginUser;

        new Promise((resolve, reject) => {
            getUser(username).then( (response) => {
                if(response.data === null){
                    this.setState({errorMessage: 'user does not exist'})
                }
                else if (password !== response.data.password){
                    this.setState({errorMessage: 'wrong password'})
                }
                else{
                    this.props.setUsername(username)
                    this.setState({errorMessage: 'login successful'})
                    resolve(this.redirectToBrowse());
                    
                }    
            })
            }).catch( err => {
                console.log(err)
            });

    }

    redirectToBrowse = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <LoginView onLogin={this.sendLogin} errorMessage={this.state.errorMessage}/>
        )
    }
}

export default withRouter(LoginController)