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
                <a href="https://react-train-expensify.herokuapp.com" className="link-no-decoration list-item">
                    <div className="list-item__main-body">
                        <div>
                            <h3 className="list-item__title"> Expensify-App </h3>
                        </div>
                        <div className="list-item--message">
                            ReactJS WebApp to organise expenses safely 
                        </div>
                    </div>
                    <div className="list-item--sub-title">
                        Jan 2019
                    </div>
                </a>
                <Link to='/tic-tac-toe' className="link-no-decoration list-item">
                    <div className="list-item__main-body">
                        <div>
                            <h3 className="list-item__title"> Tic-Tac-Toe Game </h3>
                        </div>
                        <div className="list-item--message">
                            Unbeatable tic-tac-toe bot using MinMax AI algorithm
                        </div>
                    </div>
                    
                    <div className="list-item--sub-title">
                        Feb 2018
                    </div>
                </Link>
                <Link to='/digit-recognition' className="link-no-decoration list-item">
                    <div className="list-item__main-body">
                        <div>
                            <h3 className="list-item__title"> Digit Recognizer </h3>
                        </div>
                        <div className="list-item--message">
                                Handwritten digit recognizer using Neural Network
                        </div>
                    </div>
                    <div className="list-item--sub-title">
                        July 2018
                    </div>
                </Link>
                
            </div>
            
            
        </div>
    </div>
)

export default Projects;