import React from "react";
import classes from "./RespHobby.module.css";
import ball from "../../assets/images/ball.png";

const RespHobby2 = (props) => {
  let dispClasses = [classes.Hobby, classes.Hobby2];
  return (
    <div className={dispClasses.join(" ")}>
      <div className={classes.Info2}>
        I play as a right arm spinner in the team. I can bowl both leg and off
        spin with deceptive variations. I can bat descently in the middle order
        and I enjoy cricket like nothing else!
      </div>
      <div className={classes.Img2}>
        <img src={ball} alt="Ball" />
      </div>
    </div>
  );
};

export default RespHobby2;
