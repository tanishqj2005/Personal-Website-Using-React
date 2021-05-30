import React from "react";
import classes from "./Hobby.module.css";

const Hobby3 = () => {
  let classesApply = [classes.Hobby, classes.Hobby3];
  return (
    <div className={classesApply.join(" ")}>
      <h1>Tabla</h1>
      <p>
        I am a part of the Music Club at IIT Jodhpur. I have learnt Tabla before
        joining college for about 8 years and at college I have been learning
        Cajon and drums and also some Harmonium!
      </p>
    </div>
  );
};

export default Hobby3;
