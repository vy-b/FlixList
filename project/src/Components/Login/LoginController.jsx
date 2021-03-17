import React from 'react';
import LoginView from './LoginView'
import { login } from '../../Utils/Utils';
import { withRouter } from 'react-router-dom';

class LoginController extends React.Component {
    constructor() {
        super()
        this.state = {
            errorMessage: ''
        }
    }

    sendLogin = async (loginUser) => {
        const { username, password } = loginUser;
        const res = await login(username, password);
        if (res === null) {
            this.setState({ errorMessage: 'error occured' })
        } else if (!res.valid) {
            this.setState({ errorMessage: 'user does not exist or wrong password' })
        } else {
            this.props.setUsername(username)
            this.props.history.push('/')
        }
    }


    render() {
        return (
            <LoginView onLogin={this.sendLogin} errorMessage={this.state.errorMessage} />
        )
    }
}

export default withRouter(LoginController)