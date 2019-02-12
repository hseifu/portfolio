import React from 'react';
import moment from 'moment';
import SubHeader from './SubHeader';

const Career = () => (
    <div className="transition-item list-page">
        <SubHeader subTitle="Work"/>
        <div className="content-container">
            <div className="list">
                <div className="list-header">
                    <div>
                        Company
                    </div>
                    <div>
                        Duration
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-item__title">
                        Web developer at DFKI: Deutsches Forschungszentrum für Künstliche Intelligenz
                        <div className="list-item__sub-title">(German Research Centre for Artificial Intelligence)</div>
                    </div>
                    
                    <div className="list-item__data">
                        Feb 2019 - May 2019
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-item__title">
                        Teacher's Assistant for Programming in Python
                    </div>
                    
                    <div className="list-item__data">
                        Jan 2019 - Feb 2019
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-item__title">
                        Teacher's Assistant for Programming in C
                    </div>
                   
                    <div className="list-item__data">
                        Oct 2018 - Nov 2018
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)

export default Career;