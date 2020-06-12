import React from "react";
import classes from "./Title.module.css";

const title = () => {
  return (
    <div className={classes.Title}>
      <span className={classes.Begin}>Hi, I am</span>
      <pre> </pre>
      <span className={classes.Name}>Tanishq !</span>
    </div>
  );
};

export default title;
