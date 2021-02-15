import React from 'react';
import {Nav, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
export function TopNavView() {
  return (
    <div>
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/SignUp">Logo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Browse</Nav.Link>
            </Nav>
            
            <Nav>
                <Nav.Link as={Link} to="/Search">Search</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Button as={Link} to="/SignUp" variant="outline-light">Sign Up</Button>
            </Nav>
        </Navbar>
    </div>
 );
}

export default TopNavView;
