import React from 'react';


const Square = (props) => (
    <div>
        <button className="square" onClick={() => {props.handlePick(props.value)}} disabled={props.disable}>
            {props.curValue ? props.curValue : '_'}
        </button>
    </div>
)
        


export default Square;