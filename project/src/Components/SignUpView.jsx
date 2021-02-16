import React from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SignUpView extends React.Component {
  constructor(){
    super()
    this.state = {
        username: '',
        password: '',
        confirmPassword:''
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this)
  }

  changeUsername(event){
    this.setState({
        username:event.target.value
    })
  }

  changePassword(event){
    this.setState({
        password:event.target.value
    })
  }
  changeConfirmPassword(event){
    this.setState({
        confirmPassword:event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    const signUpUser = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }
    console.log(signUpUser)
    this.props.onSignUp(signUpUser);
  }

  render() {
    return (
    <div className="App">
    <header className="App-header">
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="examplename123" onChange={this.changeUsername}/>
          <Form.Text className="text-muted" >
            Choose something unique!
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={this.changePassword}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={this.changeConfirmPassword}/>
        </Form.Group>
      </Form>
      <Button type="submit" onClick={this.onSubmit}> Sign Up </Button>
      
    </header>
    </div>
    );
  }
}
export default SignUpView
