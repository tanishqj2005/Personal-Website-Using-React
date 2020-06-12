import React from "react";
import logo2 from "../../../assets/images/logo2.png";
import classes from "./Logo.module.css";

const Logo2 = () => {
  return (
    <div className={classes.Logo}>
      <a href="https://www.instagram.com/tanishqj2005/" target="__blank">
      <img src={logo2} alt="Logo2" />
      </a>
    </div>
  );
};

export default Logo2;