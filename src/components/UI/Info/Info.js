import React from 'react';
import classes from './Info.module.css';

const Info = (props) => {
    return(
        <div className={classes.Info}>
            <h1>
                {props.title}
            </h1>
        </div>
    );
}

export default Info;