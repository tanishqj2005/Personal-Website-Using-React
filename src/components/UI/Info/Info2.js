import React from 'react';
import classes from './Info2.module.css';

const Info2 = (props) => {
    return(
        <div className={classes.Info2}>
            <h1>
                {props.title}
            </h1>
        </div>
    );
}

export default Info2;