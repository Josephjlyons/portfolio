import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';


const NavBar = () => {
  return (
    <div className='divNav'>

      <Nav>
        <ul className='navList'>

          <li><Link to="About" spy={true} smooth={true}>About</Link></li>
          <br />
          <li><Link to="Portfolio" spy={true} smooth={true}>Portfolio</Link></li>
        </ul>
      </Nav>
    </div>

  );
};

export default NavBar;