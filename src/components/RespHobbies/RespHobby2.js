import React from "react";
import classes from "./RespHobby.module.css";
import ball from "../../assets/images/ball.png";

const RespHobby2 = (props) => {
  let dispClasses = [classes.Hobby, classes.Hobby2];
  let infoClasses = null;
  let imgClasses = null;
  if(props.show){
    infoClasses = [classes.Info2,classes.Show];
    imgClasses = [classes.Img2,classes.Hide];
  }
  else{
    infoClasses = [classes.Info2,classes.Hide];
    imgClasses = [classes.Img2,classes.Show];
  }
  return (
    <div className={dispClasses.join(" ")} onClick={props.clicked}>
      <div className={infoClasses.join(' ')}>
        I play as a right arm spinner in the team. I can bowl both leg and off
        spin with deceptive variations. I can bat descently in the middle order
        and I enjoy cricket like nothing else!
      </div>
      <div className={imgClasses.join(' ')}>
        <img src={ball} alt="Ball" />
      </div>
    </div>
  );
};

export default RespHobby2;
