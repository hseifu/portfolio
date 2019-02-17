import React from 'react';
import SubHeader from './SubHeader';

const Academics = () => (
    <div className="transition-item list-page">
        <SubHeader subTitle="Background" />
        <div className="content-container">
            <div className="list">
                <div className="list-header">
                    <div>
                        Institution
                    </div>
                    <div className="hide-mobile">
                        Duration
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-item__main-body">
                        <div className="list-item__title">
                            Jacobs University Bremen 
                        </div>
                        <div className="list-item--message">
                            BSc in Computer Science with specialization in Machine Learning and AI
                        </div>
                    </div>
                    <div>
                        Sep 2017 - June 2020
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-item__main-body">
                        <div className="list-item__title">
                            Stanford University
                        </div>
                        <div className="list-item--message">
                            Machine Learning course introducing the Math behind different algorithms
                        </div>
                    </div>
                    <div>
                        June 2018 - Aug 2018
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-item__main-body">
                        <div className="list-item__title">
                            Udemy
                        </div>
                        <div className="list-item--message">
                            Web Development using ReactJS framework
                        </div>
                    </div>
                    <div>
                        Dec 2018 - Feb 2019
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-item__main-body">
                        <div className="list-item__title">
                            Ethio Parents' School
                        </div>
                        <div className="list-item--message">
                            Acquired high school diploma
                        </div>
                    </div>
                    <div>
                        Sep 2001 - June 2017
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    
)

export default Academics;