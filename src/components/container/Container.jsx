import React from 'react';
import Left from './left/Left';
import Right from './right/Right';

const Cont = () => {
    return (
        <div className='d-flex gap-4 mt-4'>
            <Left />
            <Right />
        </div>
    );
};

export default Cont;