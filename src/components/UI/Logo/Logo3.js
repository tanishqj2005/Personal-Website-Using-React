import React from "react";
import logo3 from "../../../assets/images/logo3.png";
import classes from "./Logo.module.css";

const Logo3 = () => {
  return (
    <div className={classes.Logo}>
      <a href="https://github.com/tanishqj2005" target="__blank">
      <img src={logo3} alt="Logo3" />
      </a>
    </div>
  );
};

export default Logo3;