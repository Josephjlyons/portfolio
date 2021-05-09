import React from 'react';
import { Link } from 'react-scroll';
import { Nav } from 'react-bootstrap';
import './NavBar.css';


const NavBar = () => {
  return (
    <div className='divNav'>

      <Nav>
        <ul className='navList'>

          <Link to="About" spy={true} smooth={true}>About</Link>
          <br />
          <Link to="Portfolio" spy={true} smooth={true}>Portfolio</Link>
        </ul>
      </Nav>
    </div>

  );
};

export default NavBar;