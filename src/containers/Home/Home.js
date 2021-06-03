import React, { Component } from "react";
import classes from "./Home.module.css";
import Title from "../../components/Title/Title";
import Title2 from "../../components/Title/Title2";
import Title3 from "../../components/Title/Title3";
import Button from "../../components/UI/Button/Button";
import Logos from "../../components/UI/Logos/Logos";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home} id="home">
        <Title />
        <Title2 />
        <Title3 />
        <div className={classes.Buttons}>
          <Button color="red" to="/about">
            Know More?
          </Button>
          <Button
            color="blue"
            to="https://drive.google.com/file/d/1wnKBihD-en72HWE4emKJhyYPYjiwiD_c/view?usp=sharing"
            seperate
          >
            My Resume
          </Button>
        </div>
        <div className={classes.Logos}>
          <Logos />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
