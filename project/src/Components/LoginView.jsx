import React from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class LoginView extends React.Component{
    render(){
        return(
            <div className = "App">
            <header className = "App-header">
                <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="examplename123" />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" placeholder = "Password"/>
                    </Form.Group>
                </Form>
                <Button type = "submit">Login</Button>
            
            </header>
            </div>
        );
    }
}
export default LoginView