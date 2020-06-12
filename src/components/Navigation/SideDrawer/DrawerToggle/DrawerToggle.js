import React from "react";
import classes from "./DrawerToggle.module.css";

const drawer = (props) => {
  let class1 = props.open ? classes.drawerOpen1 : classes.drawerClose1;
  let class2 = props.open ? classes.drawerOpen2 : classes.drawerClose2;
  return (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
      <div id="div1" className={class1}></div>
      <div id="div2" className={class2}></div>
    </div>
  );
};

export default drawer;
