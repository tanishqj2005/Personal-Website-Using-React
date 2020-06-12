import React, { Component } from "react";
import classes from './About.module.css';
import MyImg from '../../components/UI/MyImage/MyImage';
import Info from '../../components/UI/Info/Info';

class About extends Component {
    render() {
      return (
        <div className={classes.About}>
          <MyImg/>
          <Info/>
        </div>
      );
    }
  }
  
  export default About;