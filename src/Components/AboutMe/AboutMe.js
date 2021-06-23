import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <Jumbotron className='AboutJumbo' fluid>
            <Container id='About'>
                <h1 id='AboutMe'>About Me</h1>
                <p>

                    Full Stack Developer with strong teamwork and coordination skills, eye for design and streamlined applications. 
                    Strong drive to see problems out and come up with an effective solution in a timely manner. 
                    Always learning, refining and studying technologies as they advance to keep up to date. 
                    Interested in joining a company to help grow and innovate new products. Graduate of University of New Hampshire with a Certificate in Full Stack Web Development (4.0).
                </p>



                <br />
                <div>
                <h2>Techinal Skills</h2>



                    <li >HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>Rest API</li>
                    <li>JSON</li>
                    <li>SEO</li>
                    <li>SQL</li>
                    <li>NOSQL</li>
                    <li>MongoDB</li>
                    <li>Github/Git</li>
                    <li>BootStrap</li>
                    <li>Materialize</li>
                    <li>Firebase</li>
                    <li>Heroku</li>

                </div>
                <br />
                <div>
                    <h2>Soft Skills</h2>
                    <li>Team Player</li>
                    <li>Problem Solver</li>
                    <li>Project/Time Management</li>
                    <li>Competitve Drive</li>
                    <li>Valuable Work Ethic</li>
                
                </div>

                <br />
                <br />




            </Container>
        </Jumbotron>
    );
}

export default AboutMe;