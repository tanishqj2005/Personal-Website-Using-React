import React, { Component } from "react";
import classes from './About.module.css';
import MyImg from '../../components/UI/MyImage/MyImage';
import Info from '../../components/UI/Info/Info';
import Text from '../../components/UI/Info/Text/Text';
import Button from "../../components/UI/Button/Button";

class About extends Component {
    render() {
      return (
        <div className={classes.About}>
          <MyImg/>
          <Info title='About Me :)'/>
          <Text/>
          <div className={classes.Buttons}>
          <Button color="red" to="/hobbies">My Hobbies</Button>
          <Button color="green" to="/contact">Contact Me</Button>
        </div>
        </div>
      );
    }
  }
  
  export default About;