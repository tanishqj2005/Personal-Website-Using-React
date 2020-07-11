import React, { Component } from "react";
import classes from "./Hobbies.module.css";
import HobbyInfo from "../../components/UI/Hobby/HobbyInfo";
import Hobby3 from "../../components/UI/Hobby/Hobby3";
import Hobby2 from "../../components/UI/Hobby/Hobby2";
import Hobby1 from "../../components/UI/Hobby/Hobby1";
import tabla from "../../assets/images/tabla.png";
import ball from "../../assets/images/ball.png";
import laptop from "../../assets/images/laptop.png";
import RespHobby1 from "../../components/RespHobbies/RespHobby1";
import RespHobby2 from "../../components/RespHobbies/RespHobby2";
import RespHobby3 from "../../components/RespHobbies/RespHobby3";

class Hobbies extends Component {
  render() {
    return (
      <div className={classes.Hobbies} id="Hobbies">
        <HobbyInfo />

        <div className={classes.dispHobbies}>
          <Hobby3 />
          <Hobby2 />
          <Hobby1 />
          <RespHobby1/>
          <RespHobby2/>
          <RespHobby3/>
        </div>
        <div className={[classes.Img, classes.Img1].join(" ")}>
          <img src={tabla} alt="tabla" />
        </div>
        <div className={[classes.Img, classes.Img2].join(" ")}>
          <img src={ball} alt="ball" />
        </div>
        <div className={[classes.Img, classes.Img3].join(" ")}>
          <img src={laptop} alt="cricket" />
        </div>
      </div>
    );
  }
}

export default Hobbies;
