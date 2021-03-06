import React from 'react';
import { Nav, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import FlixListLogo from '../Logos/Logo.svg';

class TopNavView extends React.Component {
    signOut = () => {
        this.props.setUsername(undefined)
    }
    render() {
        return (
            <div>
                <Navbar fixed="top" variant="dark" id="topNav">
                    <Navbar.Brand as={Link} to="/SignUp">
                        <img src={FlixListLogo} alt="FlixList Logo" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Browse</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/Search">
                            <FaSearch className="searchIcon" />
                        </Nav.Link>
                        {this.props.username ? <> <Nav.Link as={Link} to="/Profile">{this.props.username}</Nav.Link><Nav.Link onClick={this.signOut} as={Link} to="/Login">Sign Out</Nav.Link> </> :
                            <>

                                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                                <Button as={Link} to="/SignUp" variant="outline-light">Sign Up</Button>
                            </>}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default TopNavView;
