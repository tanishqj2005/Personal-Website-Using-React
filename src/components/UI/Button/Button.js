import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";

const button = (props) => {
  let returnVal = <Link to={props.to}>{props.children}</Link>;

  if (props.seperate) {
    returnVal = <a href={props.to} target ="_blank" rel="noopener noreferrer">{props.children}</a>;
  }

  return (
    <button className={classes.Button} style={{ backgroundColor: props.color }}>
      {returnVal}
      {/* <Link to={props.to}>{props.children}</Link> */}
    </button>
  );
};

export default button;
