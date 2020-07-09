import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    return (
        <div className={classes.Input}>
            <input onChange={props.change} type={props.type} placeholder={props.placeholder} name={props.name} id={props.name}/>
        </div>
    );
}

export default input;