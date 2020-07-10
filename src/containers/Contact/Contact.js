import React, { Component } from "react";
import classes from "./Contact.module.css";
import Info2 from "../../components/UI/Info/Info2";
import Input from "../../components/UI/Input/Input";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  nameChangedHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  emailChangedHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  messageChangedHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  submitForm = () => {
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    if (name === "" || email === "" || message === "") {
      alert("Fill all details completely to contact me!");
      this.props.history.push("/contact");
    } else {
      axios
        .post("https://personal-website-adb81.firebaseio.com/", {
          name: name,
          email: email,
          message: message,
        })
        .then((response) => {
          console.log(response);
        });
      alert(
        "Thanks for contacting me! I will write back to you as soon as possible!"
      );
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className={classes.Contact} id="Contact">
        <Info2 title="Contact Me :)" />
        <div className={classes.Inputs}>
          <Input
            change={this.nameChangedHandler}
            placeholder="Enter Your Name"
            type="text"
            name="name"
          />
          <Input
            change={this.emailChangedHandler}
            placeholder="Enter Your Email"
            type="email"
            name="email"
          />
          <Input
            change={this.messageChangedHandler}
            placeholder="Leave A Message"
            type="text"
            name="message"
          />
        </div>
        <div className={classes.Buttons}>
          <button type="button" onClick={this.submitForm}>
            Submit Form
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
