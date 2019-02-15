import React from 'react';
import SubHeader from './SubHeader';

const Academics = () => (
    <div className="transition-item list-page">
        <SubHeader subTitle="Background" />
        <div className="content-container">
            <div className="list">
                <div className="list-header">
                    <div>
                        School
                    </div>
                    <div>
                        Duration
                    </div>
                </div>
                <div className="list-item">
                    Computer Sceince student at Jacobs University bremen 
                    <div>
                        Sep 2017 - June 2020
                    </div>
                </div>
                <div className="list-item">
                    Coursera course participant
                    <div>
                        July 2018 - Aug 2018
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    
)

export default Academics;