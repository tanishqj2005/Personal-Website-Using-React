import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => {
  let classesApply = [classes.NavigationItem];
  return (
    <li className={classesApply.join(' ')}>
      <NavLink to={props.link} activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
};
export default navigationItem;
