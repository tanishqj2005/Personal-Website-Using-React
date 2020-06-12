import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems2 from '../NavigationItems/NavigationItems2';

const sideDrawer = (props) => {
    let classesApply=[classes.SideDrawer]
    if(props.show){
        classesApply.push(classes.Open);
    }
    else{
        classesApply.push(classes.Close)
    }
    return(
        <div className={classesApply.join(' ')}  onClick={props.clicked}>
            <NavigationItems2/>
        </div>
    );
}

export default sideDrawer;