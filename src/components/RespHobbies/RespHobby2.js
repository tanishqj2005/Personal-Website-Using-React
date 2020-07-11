import React from 'react';
import classes from './RespHobby.module.css';

const RespHobby2 = (props) => {
    let dispClasses = [classes.Hobby, classes.Hobby2]
    return (
        <div className={dispClasses.join(' ')}>
            Hi
        </div>
    );
}

export default RespHobby2;