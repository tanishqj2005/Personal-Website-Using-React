import React from "react";
import classes from "./Loader.module.css";

const loader = () => {
  return (<div className={classes.Loader}>
    <div className={classes.overlay1}>Ready?</div>
    <div className={classes.overlay2}>Set</div>
    <div className={classes.overlay3}>Go!</div>
  </div>);
};

export default loader;
