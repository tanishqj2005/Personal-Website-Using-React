import React from "react";
import logo1 from "../../../assets/images/logo1.png";
import classes from "./Logo.module.css";

const Logo1 = () => {
  return (
    <div className={classes.Logo}>
      <a href="https://www.facebook.com/tanishq.joshi.5680" target="__blank">
      <img src={logo1} alt="Logo1" />
      </a>
    </div>
  );
};

export default Logo1;
