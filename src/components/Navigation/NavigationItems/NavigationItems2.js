import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems2 = (props) => (
  <ul className={classes.NavigationItems2}>
    <NavigationItem link="/">Home</NavigationItem>
  </ul>
);

export default navigationItems2;
