import React from "react";
import classes from "./RespHobby.module.css";
import tabla from "../../assets/images/tabla.png";

const RespHobby1 = (props) => {
  let dispClasses = [classes.Hobby, classes.Hobby1];
  let infoClasses = null;
  let imgClasses = null;
  if(props.show){
    infoClasses = [classes.Info1,classes.Show];
    imgClasses = [classes.Img1,classes.Hide];
  }
  else{
    infoClasses = [classes.Info1,classes.Hide];
    imgClasses = [classes.Img1,classes.Show];
  }
  return (
    <div className={dispClasses.join(" ")} onClick={props.clicked}>
      <div className={infoClasses.join(' ')}>
        I am a part of the Music Club at IIT Jodhpur. I have learnt Tabla before
        joining college for about 8 years and at college I have been learning
        Cajon and drums!
      </div>
      <div className={imgClasses.join(' ')}>
        <img src={tabla} alt="Tabla" />
      </div>
    </div>
  );
};

export default RespHobby1;
