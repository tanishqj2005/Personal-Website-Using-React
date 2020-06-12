import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";

const button = (props) => (
  <button
    className={classes.Button}
    style={{backgroundColor:props.color}}
  >
    <Link to={props.to}>{props.children}</Link>
  </button>
);

export default button;
