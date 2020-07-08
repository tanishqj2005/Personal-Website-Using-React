import React,{Component} from 'react';
import classes from './Hobbies.module.css';
import HobbyInfo from "../../components/UI/Hobby/HobbyInfo";
import Hobby3 from "../../components/UI/Hobby/Hobby3";
import Hobby2 from "../../components/UI/Hobby/Hobby2";
import Hobby1 from "../../components/UI/Hobby/Hobby1";
import tabla from "../../assets/images/tabla.png";
import ball from "../../assets/images/ball.png";
import laptop from "../../assets/images/laptop.png";

class Hobbies extends Component {
    render() {
      return (
        <div className={classes.Hobbies} id="Hobbies">
            <HobbyInfo/>
            <Hobby3/>
            <div className={[classes.Img,classes.Img1].join(' ')}>
              <img src={tabla} alt="tabla"/>
            </div>
            <div className={[classes.Img,classes.Img2].join(' ')}>
              <img src={ball} alt="ball"/>
            </div>
            <div className={[classes.Img,classes.Img3].join(' ')}>
              <img src={laptop} alt="cricket"/>
            </div>
            <Hobby2/>
            <Hobby1/>
        </div>
      );
    }
  }
  
export default Hobbies;