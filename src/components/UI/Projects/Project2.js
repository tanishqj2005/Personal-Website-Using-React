import React from "react";
import classes from "./Project1.module.css";
import proj2 from "../../../assets/images/project2.png";

const Project2 = () => {
  let classesApply = [classes.Project1];
  return (
    <div className={classesApply.join(" ")}>
      <div className={classes.MyImg}>
        <img src={proj2} alt="proj2" />
      </div>
      <div className={[classes.Info1, classes.Info].join(" ")}>
        <h1>Extracting Average Temperature from Thermal Videos</h1>
        <p>
          The basic goal of our project is to extract the average
          temperature of a person across a thermal video. The data set given to
          us contains recorded thermal videos of people. In those thermal
          videos, we can see numeric values of temperature predicted by the
          thermal gun. As these values of temperature vary over the thermal
          video, our task is to compute the average temperature of the person
          across the duration of the video. We used different models like the
          Random Forest, Support Vector Machine, Convolutional Neural Network,
          Multi-Layer Perceptron, etc. We used many techniques to extract the
          individual digits visible in each frame and then use the above
          mentioned models for predicting on them.
        </p>
      </div>
    </div>
  );
};

export default Project2;
