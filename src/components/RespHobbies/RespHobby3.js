import React from "react";
import classes from "./RespHobby.module.css";
import laptop from "../../assets/images/laptop.png";

const RespHobby3 = (props) => {
  let dispClasses = [classes.Hobby, classes.Hobby3];
  let infoClasses = null;
  let imgClasses = null;
  if(props.show){
    infoClasses = [classes.Info3,classes.Show];
    imgClasses = [classes.Img3,classes.Hide];
  }
  else{
    infoClasses = [classes.Info3,classes.Hide];
    imgClasses = [classes.Img3,classes.Show];
  }
  return (
    <div className={dispClasses.join(" ")} onClick={props.clicked}>
      <div className={infoClasses.join(' ')}>
        I am highly interested in Software development and Artificial
        Intelligence. I like to create ML powered websites and apps and I have
        keen interest in designing!
      </div>
      <div className={imgClasses.join(' ')}>
        <img src={laptop} alt="laptop" />
      </div>
    </div>
  );
};

export default RespHobby3;
