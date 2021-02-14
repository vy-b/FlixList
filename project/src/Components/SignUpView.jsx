import React from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function SignUpView() {
  return (
    <div className="App">
    <header className="App-header">
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="examplename123" />
          <Form.Text className="text-muted" >
            Choose something unique!
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <Button type="submit"> Sign Up </Button>
      
    </header>
  </div>
  );
}

export default SignUpView;
