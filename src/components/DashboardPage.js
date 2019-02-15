import React from 'react';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';


const Dashboard = () => (
    <div className="transition-item list-page">
        <div className="content-container">
            <div className="box">
                <div className="my_img box-img"> </div>
                <h1>
                Henok Seifu</h1>
                <h5>
                Data Analyst - Web Developer</h5>
                <p>
                    Energetic 20 year old passsionate about Data Processing and Delivery.
                </p>
                <ul>
                
                    

                <li>
                    <a href="https://www.linkedin.com/in/henok-s/" >
                    <FaLinkedin color="#0077B5"/>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/hseifu">
                    <FaGithub color="black"/>
                    </a>
                </li>
                <li>
                    <a href="./files/cv.pdf" download >
                    <FaDownload/>
                    </a>
                </li>
                
                </ul>
            </div>
        </div>
            
    </div>
)

export default Dashboard;