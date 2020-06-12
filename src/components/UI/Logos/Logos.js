import React from 'react';
import classes from './Logos.module.css';
import Logo1 from '../Logo/Logo1'
import Logo2 from '../Logo/Logo2'
import Logo3 from '../Logo/Logo3'
import Logo4 from '../Logo/Logo4'

const logos = () => {
    return (
        <div className={classes.Logos}>
            <Logo1/>
            <Logo2/>
            <Logo3/>
            <Logo4/>
        </div>
    );
}

export default logos;