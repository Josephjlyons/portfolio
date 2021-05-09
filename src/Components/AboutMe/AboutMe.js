import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <Jumbotron className='AboutJumbo' fluid>
            <Container id='About'>
                <h1 id='AboutMe'>About Me</h1>
                <p>

                    Aspiring Full Stack Developer, with a passion to work hard and get the job done right.
                    Goal oriented along with a team-first mentality to accomplish any task that is presented to me. Coming from a background as a professional chef and kitchen manager, I approach everything with a plan and a drive to accomplish whatever the task may be.
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