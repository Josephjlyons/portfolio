import React from 'react';
import { Jumbotron, Container, Image } from 'react-bootstrap'
import './AboutMe.css';
import photoMe from '../assets/photoMe.png'


const AboutMe = () => {
  return (
    <Jumbotron className='jumbo' fluid>
      <Container>
        <h1>Joseph J Lyons</h1>
        <Image
                        className="d-block w-35" fluid roundedCircle
                        src={photoMe}
                        alt="imageofme"
                    />
        <p>
          This is where i will put my life story and shit.
    </p>
      </Container>
    </Jumbotron>





  )
}

export default AboutMe;