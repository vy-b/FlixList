import React from 'react';
import {Nav, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa';
import FlixListLogo from '../Logos/Logo.svg';

class TopNavView extends React.Component {
    render() {
        return (
        <div>
            <Navbar fixed="top" variant="dark" id="topNav">
                <Navbar.Brand as={Link} to="/SignUp">
                    <img src = {FlixListLogo} alt = "FlixList Logo" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Browse</Nav.Link>
                </Nav>
                
                <Nav>
                    <Nav.Link as={Link} to="/Search">
                        <FaSearch className = "searchIcon" />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                    <Button as={Link} to="/SignUp" variant="outline-light">Sign Up</Button>
                </Nav>
            </Navbar>
        </div>
        );
    }
}

export default TopNavView;
