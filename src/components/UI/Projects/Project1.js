import React from "react";
import classes from "./Project1.module.css";
import proj1 from "../../../assets/images/project1.png";

const Project1 = () => {
  let classesApply = [classes.Project1];
  return (
    <div className={classesApply.join(" ")}>
      <div className={classes.MyImg}>
        <img src={proj1} alt="proj1" />
      </div>
      <div className={[classes.Info1, classes.Info].join(" ")}>
        <h1>Limited Hand-drawn Sketch Recognition</h1>
        <p>
          We have created an efficient Machine Learning pipeline to predict the
          classes of hand drawn sketches. We currently support 30 classes of
          objects. We have used a CNN model for predicting on the sketches. We basically compared the accuracies 
          that we were obtaining from different models like the Random Forest, MLP, etc and chose the CNN. We
          then deployed this model on a backend server created using Flask and
          created the frontend of this project using React. A demo of the website is shown on the 
          image on the left. It is deployed on
          the below mentioned website: 
        </p>
        <p>https://flamboyant-jepsen-6e91fc.netlify.app/</p>
      </div>
    </div>
  );
};

export default Project1;
