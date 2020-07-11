import React from 'react';
import classes from './RespHobby.module.css';

const RespHobby1 = (props) => {
    let dispClasses = [classes.Hobby, classes.Hobby1]
    return (
        <div className={dispClasses.join(' ')}>
            Hi
        </div>
    );
}

export default RespHobby1;