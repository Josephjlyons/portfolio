import React from 'react';
import Particles from 'react-particles-js'
import { Jumbotron, Container, Col, Row, Figure } from 'react-bootstrap'
import './AboutMe.css';
import photoMe from '../assets/photoMe.png'



const AboutMe = () => {
  return (
    <Jumbotron className='jumbo' fluid>
      <Container>
        <Row>
          <Col>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 150,
                    density: {
                      enable: true,
                      value_area: 3600,
                    }
                  },
                  color: {
                    value: "#F50000",
                    animation: {
                      enable: true,
                      speed: 20,
                      sync: true
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#F50000',
                    opacity: 0.4,
                    width: 3.5
                  },
                },
              }}
            />
            <Figure.Image
              width={500}
              height={400}
              src={photoMe}
              alt="imageofme"
            />

          </Col>
          <Col>
            <Particles

              params={{
                particles: {
                  number: {
                    value: 150,
                    density: {
                      enable: true,
                      value_area: 3700,
                    }
                  },
                  color: {
                    value: "#F50000",
                    animation: {
                      enable: true,
                      speed: 20,
                      sync: true
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 100,
                    color: '#F50000',
                    opacity: 0.4,
                    width: 3
                  },
                },
              }}
            />
            <h1>Joseph J Lyons</h1>
            <a className='social' href="mailto:josephjlyons90@gmail.com"><i className="fontawesome fas fa-envelope-square"></i></a>

            <a className='social' href="https://github.com/Josephjlyons"><i className=" fontawesome fab fa-github-square"></i></a>

            <a className='social' href="https://www.linkedin.com/in/joseph-lyons-0a2630200/"><i className=" fontawesome fab fa-linkedin"></i></a>

            <a className='social' href="tel:603-707-1045"><i className="fontawesome fas fa-phone-square-alt"></i></a>

          </Col>
        </Row>
      </Container>
    </Jumbotron>





  )
}

export default AboutMe;