import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <Jumbotron className='AboutJumbo' fluid>
            <Container id='About'>
                <h1 id='AboutMe'>About Me</h1>
                <p>

                Full Stack Developer with strong teamwork and coordination skills, eye for design and streamlined applications. Strong drive to see problems out and come up with an effective solution in a timely manner. Always learning, refining and studying technologies as they advance to keep up to date. Interested in joining a company to help grow and innovate new products. Graduate of University of New Hampshire with a Certificate in Full Stack Web Development (4.0).
                </p>



                <br />
                <h2>Skills</h2>


                <li>HTML + CSS</li>
                <li>JavaScript</li>
                <li>TypeScript Basics</li>
                <li>BootStrap</li>
                <li>Materialize</li>
                <li>React</li>
                <li>MySQL + NoSQL</li>

                <br />
                <br />

                <h3>What I like to Do</h3>
                <li>Golfing</li>
                <li>Hanging out with friends</li>
                <li>Video Games</li>
                <li>Learning new things</li>
                <br />
                <br />



            </Container>
        </Jumbotron>
    );
}

export default AboutMe;