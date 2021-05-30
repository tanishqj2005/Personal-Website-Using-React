import React from "react";
import classes from "./Project1.module.css";
import proj3 from "../../../assets/images/project2.png";

const Project3 = () => {
  let classesApply = [classes.Project1];
  return (
    <div className={classesApply.join(" ")}>
      <div className={classes.MyImg}>
        <img src={proj3} alt="proj3" />
      </div>
      <div className={[classes.Info1, classes.Info].join(" ")}>
        <h1>
          Real Time People Counting with Social Distancing Implementation (Using
          Yolo v2)
        </h1>
        <p>
          We have implemented an algorithm in Python to count the number of
          people in a live feed from a link. It can be received from an IP
          Camera or a smartphone. We have also implemented calculating the
          number of people disobeying the social distancing protocol. The
          algorithm was then deployed on flask based server and the data
          collected (total number of people and the number of people violating
          the social distancing norms) was then uploaded to thingspeak website
          to better analyze the trends and even automate features like mailing
          the authorities if more than a threshold amount of people are found.
        </p>
      </div>
    </div>
  );
};

export default Project3;
