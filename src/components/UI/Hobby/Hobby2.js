import React from 'react';
import classes from './Hobby.module.css';

const Hobby2 = () => {
    let classesApply = [classes.Hobby,classes.Hobby2];
    return(
        <div className={classesApply.join(' ')}>
            <h1>Cricket</h1>
            <p>I play as a right arm spinner in the team. I can bowl both leg and off spin with deceptive variations. I can bat descently in the middle order and I enjoy cricket like nothing else!</p>
        </div>
    );
}

export default Hobby2;