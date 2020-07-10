import React, { Component } from "react";
import classes from "./Projects.module.css";
import Button from "../../components/UI/Button/Button";

class Projects extends Component {
  render() {
    return (
      <div className={classes.Projects}>
        <div className={classes.Info}>
          <h1>Coming Soon!</h1>
        </div>
        <div className={classes.Buttons}>
          <Button color="red" to="/hobbies">
            My Hobbies
          </Button>
          <Button color="green" to="/contact">
            Contact Me
          </Button>
        </div>
      </div>
    );
  }
}

export default Projects;
