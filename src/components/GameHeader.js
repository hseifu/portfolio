import React from 'react';

export default (props) => (
    <div>
        <h3>Choose your character</h3>
        <div className="game">
            <button onClick={() => {props.chooseCharacter('X')}} className="tile">X</button>
            <button onClick={() => {props.chooseCharacter('O')}} className="tile">O</button>
        </div>
        
    </div>
)
