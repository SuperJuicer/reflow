import React from 'react';
import './Bottom.css';

const Bottom = (props) => {

    return (
        <div className='bottom'>
            <div className='grid' style={{marginTop: props.marginTop}}>
                <h2>Fixed position grid</h2>
            </div>
        </div>
    );
};

export default Bottom;