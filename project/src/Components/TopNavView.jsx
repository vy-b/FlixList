import React from 'react';
import {Nav, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function TopNavView() {
  return (
    <div>
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#browse">Browse</Nav.Link>
            </Nav>
            
            <Nav>
                <Nav.Link href="#search">Search</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Button variant="outline-light">Sign Up</Button>
            </Nav>
        </Navbar>
    </div>
    
 );
}

export default TopNavView;
