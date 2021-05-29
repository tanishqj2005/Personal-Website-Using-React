import React from "react";
import myimg from "../../../assets/images/tanishq.jpg";
import classes from "./MyImg.module.css";

const MyImg = () => {
  return (
    <div className={classes.MyImg}>
      <img src={myimg} alt="myimg" />
    </div>
  );
};

export default MyImg;
