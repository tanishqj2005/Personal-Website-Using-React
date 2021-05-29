import React from "react";
import {Link} from 'react-router-dom'
import classes from "./Logo.module.css";

const Logo = () => {

  return (
    <Link to="/" className={classes.Logo}>
      Tanishq.
    </Link>
  );
};

export default Logo;
