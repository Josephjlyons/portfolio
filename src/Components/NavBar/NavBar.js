import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './NavBar.css'


const NavBar = () => {
    return (

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
};

export default NavBar;