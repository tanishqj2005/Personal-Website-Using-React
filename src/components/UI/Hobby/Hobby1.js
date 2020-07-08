import React from 'react';
import classes from './Hobby.module.css';

const Hobby1 = () => {
    let classesApply = [classes.Hobby,classes.Hobby1];
    return(
        <div className={classesApply.join(' ')}>
            <h1>Programming</h1>
            <p>I am highly interested in Software development and Artificial Intelligence. I like to create ML powered websites and apps and I have keen interest in designing!</p>
        </div>
    );
}

export default Hobby1;