import React from 'react';
import './Bottom.css';

const Bottom = (props) => {
    console.log(props);
// console.log(props.marginTop); undefined
console.log(props.style);

    return (
        <div className='bottom'>
            <div className='grid' style={props.style} /*style={{marginTop: props.marginTop}}*/>
                <h2>Fixed position grid</h2>
            </div>
        </div>
    );
};

export default Bottom;