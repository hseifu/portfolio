import React from 'react';
import Drawing from './Canvas';
import SubHeader from './SubHeader';

const DigitRecognition = () => {
    return (
        <div className="transition-item list-page">
            <SubHeader subTitle="Digit Recognition"/>
            <Drawing />
        </div>
        
    )
        
}


export default DigitRecognition;