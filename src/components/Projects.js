import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';

const Projects = () => (
    <div className="transition-item list-page">
        <SubHeader subTitle="My Projects"/>
        <div className="content-container">
            
            <h3>Here are some projects I have worked on in the past couple of years</h3>
            <div className="list">
                <div className="list-header">
                    <div>
                        Project Name
                    </div>
                    <div>
                        Last Updated
                    </div>
                </div>
                
                <Link to='/tic-tac-toe' className="link-no-decoration list-item">
                    <div>
                        <h3 className="list-item__title"> Tic-Tac-Toe Game </h3>
                    </div>
                    <div>
                        Last updated
                    </div>
                </Link>
                <Link to='/digit-recognition' className="link-no-decoration list-item">
                    <div>
                        <h3 className="list-item__title"> Digit Recognizer </h3>
                    </div>
                    <div>
                        Last updated
                    </div>
                </Link>
            </div>
            
            
        </div>
    </div>
)

export default Projects;