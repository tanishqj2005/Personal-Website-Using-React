import React, { Component } from "react";
import classes from "./About.module.css";
import MyImg from "../../components/UI/MyImage/MyImage";
import Info from "../../components/UI/Info/Info";
import Text from "../../components/UI/Info/Text/Text";
import Button from "../../components/UI/Button/Button";

class About extends Component {
  render() {
    return (
      <div className={classes.About}>
        <MyImg />
        <Info title="About Me" />
        <Text />
        <div className={classes.Buttons}>
          <Button color="red" to="/hobbies">
            My Hobbies
          </Button>
          <Button color="green" to="/projects">
            My Projects
          </Button>
        </div>
        <div className={classes.Small} style={{width:'100%', textAlign:'center', position :'absolute', top: '26vh'}}>
          <p style={{ color: "pink", fontFamily:"Permanent Marker", fontSize:40 }}>
            Please Open the Website on a Bigger Screen
          </p>
          <p style={{ color: "white", fontFamily:"Permanent Marker", fontSize:33 }}>
            Sorry for the inconvenience :(
          </p>
        </div>
      </div>
    );
  }
}

export default About;
