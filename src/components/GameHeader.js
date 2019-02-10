import React from 'react';

export default (props) => (
    <div>
        <h3>Choose your character</h3>
        <button onClick={() => {props.chooseCharacter('X')}}>X</button>
        <button onClick={() => {props.chooseCharacter('O')}}>O</button>
    </div>
)
