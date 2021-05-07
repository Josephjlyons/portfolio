import React from 'react';
import { Jumbotron, Container, ListGroup, Row, Col, Figure } from 'react-bootstrap'
import './Portfolio.css';
import draughtwebimage from '../assets/draughtwebimage.png';
import dndhomepage from '../assets/dndhomepage.png';
import notetakermainpng from '../assets/notetakermainpng.png';
import employeecard from '../assets/employeecard.png';
import fitnessChart from '../assets/fitnessChart.png';
import dragdrop from '../assets/dragdrop.png';

const Project = () => {
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Portfolio and Projects</h1>
                </Container>
            </Jumbotron>
            {/* Project Split */}

            <Jumbotron fluid>
                <Container>
                    <h1>Draught Picker</h1>
                    <Row>
                        <Col>
                            <Figure.Image
                                width={300}
                                height={250}
                                // className="w-25"
                                src={draughtwebimage}
                                alt="projectIMG"
                            />

                        </Col>
                        <Col>

                            <p>This site allows the user to enter a zip code and receive the name, address, phone number, URL, and type of all the breweries that are local to the zip code.
                                    The user is given the option save up to five locations to their favorites.</p>
                            <p>Built With</p>
                            <ListGroup>
                                <ListGroup.Item>Map Quest API</ListGroup.Item>
                                <ListGroup.Item>OpenBreweryDB API</ListGroup.Item>
                                <ListGroup.Item>Materialize</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>

                            </ListGroup>

                            <a className='linkText' href="https://josephjlyons.github.io/DraughtPicker/" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Website!</a>
                            <a className='linkText' href="https://github.com/Josephjlyons/DraughtPicker" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Code!</a>
                        </Col>
                    </Row>


                </Container>
            </Jumbotron>
            {/* Project Split */}

            <Jumbotron fluid>
                <Container>
                    <h1>Dungeons and Dragon Quick Character Creator Express</h1>
                    <Row>
                        <Col>
                            <Figure.Image
                                width={300}
                                height={500}
                                src={dndhomepage}
                                alt="projectIMG"
                            />

                        </Col>
                        <Col>
                            <p>
                                Have you ever needed to make a Dungeons and Dragons character on the fly? Well look no further!
                                Making a new character to play with can take quite a bit of time and who has time to waste when you just want to play.
                            This app allows users to easily create new characters fast with generated stats that would meet all the criteria needed to start or jump into a campaign!</p>
                            <p>Built With</p>
                            <ListGroup className='techList'>
                                <ListGroup.Item>Node.js</ListGroup.Item>
                                <ListGroup.Item>Express.js</ListGroup.Item>
                                <ListGroup.Item>Axios</ListGroup.Item>
                                <ListGroup.Item>Bcrypt</ListGroup.Item>
                                <ListGroup.Item>PostgresSQL</ListGroup.Item>
                                <ListGroup.Item>Sequelize</ListGroup.Item>

                            </ListGroup>
                            <a className='linkText' href="https://character-creator-express.herokuapp.com/login" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Website!</a>
                            <a className='linkText' href="https://github.com/Josephjlyons/dnd-quick-character-creator" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Code!</a>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
            {/* Project Split */}

            <Jumbotron fluid>
                <Container>
                    <h1>Express Notes</h1>
                    <Row>
                        <Col>
                            <Figure.Image
                                width={300}
                                height={250}
                                src={notetakermainpng}
                                alt="projectIMG"
                            />

                        </Col>
                        <Col>
                            <p>
                                A backend that uses various technologies that allows the user to create, store and delete notes.
                                An easy and simple UI that allows the user to easily manage notes.
                            </p>
                            <p>Built With</p>
                            <ListGroup>
                                <ListGroup.Item>Node.js</ListGroup.Item>
                                <ListGroup.Item>Express.js</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>BootStrap</ListGroup.Item>

                            </ListGroup>

                            <a className='linkText' href="http://morning-cove-82071.herokuapp.com/" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Website!</a>
                            <a className='linkText' href="https://github.com/Josephjlyons/express-notes" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Code!</a>

                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            {/* Project Split */}

            <Jumbotron fluid>
                <Container>
                    <h1>Team Generator</h1>
                    <Row>
                        <Col>
                            <Figure.Image
                                width={300}
                                height={250}
                                // className="w-25"
                                src={employeecard}
                                alt="projectIMG"
                            />

                        </Col>
                        <Col>
                            <p>
                                A simple backend application that generates a formatted HTML page.
                        Complete with cards per each employee role (Manager, Engineer, Intern) and their respective details.</p>
                            <p>Built With</p>
                            <ListGroup>
                                <ListGroup.Item>Node.js</ListGroup.Item>
                                <ListGroup.Item>Inquirer</ListGroup.Item>
                                <ListGroup.Item>Jest</ListGroup.Item>
                                <ListGroup.Item>Bulma</ListGroup.Item>

                            </ListGroup>

                            <a className='linkText' href="https://github.com/Josephjlyons/Team-Profile-Generator" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Code!</a>

                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            {/* Project Split */}

            <Jumbotron fluid>
                <Container>
                    <h1>Fitness Tracker</h1>
                    <Row>
                        <Col>
                            <Figure.Image
                                width={300}
                                height={250}
                                // className="w-25"
                                src={fitnessChart}
                                alt="projectIMG"
                            />

                        </Col>
                        <Col>
                            <p>
                                An application that allows the user to input new workouts and complete previous workouts.
                                Once done, clicking to the dashboard the user will be able to see their workout stats from the previous seven days.
                        Clicking on a certain workout in either the duration or workout will alter the chart and reflect changes.</p>
                            <p>Built With</p>
                            <ListGroup>
                                <ListGroup.Item>DotEnv</ListGroup.Item>
                                <ListGroup.Item>Express.js</ListGroup.Item>
                                <ListGroup.Item>Mongoose</ListGroup.Item>
                                <ListGroup.Item>NoSQL</ListGroup.Item>

                            </ListGroup>
                            <a className='linkText' href="https://rocky-waters-93224.herokuapp.com/" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Website!</a>
                            <a className='linkText' href="https://github.com/Josephjlyons/fitness-tracker" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Code!</a>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>{/* Project Split */}

            <Jumbotron fluid>
                <Container>
                    <h1>Drag and Drop Project Management</h1>
                    <Row>
                        <Col>
                            <Figure.Image
                                width={300}
                                height={250}
                                // className="w-25"
                                src={dragdrop}
                                alt="projectIMG"
                            />

                        </Col>
                        <Col>
                            <p>
                                An application made with TypeScript that allows the user to input a title, description and the number of people working on the project. A key feature of this application
                                    is that it allows the user to drag active projects into the finished project box. </p>
                            <p>Built With</p>
                            <ListGroup>
                                <ListGroup.Item>TypeScript</ListGroup.Item>
                                <ListGroup.Item>TsConfig</ListGroup.Item>
                                <ListGroup.Item>Component Based</ListGroup.Item>
                                <ListGroup.Item>Proper File Structure</ListGroup.Item>

                            </ListGroup>

                            <a className='linkText' href="https://github.com/Josephjlyons/Drag-Drop-TypeScript" target="_blank" rel="noreferrer noopener" class="btn btn-lg">View the Code!</a>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        </>
    )
}

export default Project;