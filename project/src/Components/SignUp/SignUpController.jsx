import React from 'react';
import SignUpView from './SignUpView'
import axios from 'axios'
import { signup } from '../../Utils/Utils';

class SignUpController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: ''
        }

    }


    sendSignUp = async (signUpUser) => {
        const { username, password, confirmPassword } = signUpUser;
        const res = await signup(username);
        if (res === null) {
            this.setState({ errorMessage: "error occured" })
        } else if (res.valid) {
            this.setState({ errorMessage: "username already exists" })
        } else if (password.length < 6) {
            this.setState({ errorMessage: 'passwords must be 6 characters or more' })
        } else if (password !== confirmPassword) {
            this.setState({ errorMessage: "passwords don't match" })
        } else {
            await axios.post('http://localhost:3001/addUser', signUpUser)
            this.props.history.push('/Login');
        }

    }

    render() {
        return (
            <SignUpView onSignUp={this.sendSignUp} errorMessage={this.state.errorMessage} />
        )
    }
}

export default SignUpController