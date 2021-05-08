import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <Jumbotron className='AboutJumbo' fluid>
            <Container id='About'>
                <h1 id='AboutMe'>About Me</h1>
                <p> BACON

                Spicy jalapeno bacon ipsum dolor amet buffalo tri-tip jerky flank. Beef strip steak short ribs,
                ribeye landjaeger spare ribs brisket pork chop shoulder tail porchetta. Boudin pork loin swine ball tip meatloaf, short loin pastrami leberkas chislic ground round tri-tip beef ribs. Boudin porchetta burgdoggen rump cupim landjaeger, short ribs filet mignon turducken ground round t-bone pork loin kevin strip steak.
<br />
                Spicy jalapeno bacon ipsum dolor amet buffalo tri-tip jerky flank. 
                Beef strip steak short ribs, ribeye landjaeger spare ribs brisket pork chop shoulder tail porchetta. 
                Boudin pork loin swine ball tip meatloaf, short loin pastrami leberkas chislic ground round tri-tip beef ribs. Boudin porchetta burgdoggen rump cupim landjaeger, short ribs filet mignon turducken ground round t-bone pork loin kevin strip steak.
<br />
                Pig burgdoggen pork loin swine brisket picanha sausage. 
                Pork chop tail alcatra pork belly turducken bacon salami. 
                Shoulder pastrami t-bone, shank drumstick burgdoggen meatloaf biltong kielbasa alcatra venison sausage flank ground round buffalo. 
                Pig pork loin t-bone short ribs, tongue hamburger brisket tri-tip pork belly beef pork cow turducken venison leberkas. Swine leberkas kielbasa pastrami ground round chuck.
<br />
                </p>
            </Container>
        </Jumbotron>
    );
}

export default AboutMe;