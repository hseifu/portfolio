import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
    <div>
        <h3>Here are some projects I have worked on in the past couple of years</h3>
        
        <Link to='/tic-tac-toe'>
            tic-tac-toe game
        </Link>
        <Link to='/digit-recognition'>
            Digit Recognizer
        </Link>
    </div>
)

export default Projects;