import React from "react";
import classes from "./RespHobby.module.css";
import laptop from "../../assets/images/laptop.png";

const RespHobby3 = (props) => {
  let dispClasses = [classes.Hobby, classes.Hobby3];
  return (
    <div className={dispClasses.join(" ")}>
      <div className={classes.Info3}>
        I am highly interested in Software development and Artificial
        Intelligence. I like to create ML powered websites and apps and I have
        keen interest in designing!
      </div>
      <div className={classes.Img3}>
        <img src={laptop} alt="laptop" />
      </div>
    </div>
  );
};

export default RespHobby3;
