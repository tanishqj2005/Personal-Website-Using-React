import React from 'react';
import classes from './RespHobby.module.css';

const RespHobby3 = (props) => {
    let dispClasses = [classes.Hobby, classes.Hobby3]
    return (
        <div className={dispClasses.join(' ')}>
            Hi
        </div>
    );
}

export default RespHobby3;