import React, { Component } from "react";
import classes from "./Contact.module.css";
import Info2 from "../../components/UI/Info/Info2";
import Input from "../../components/UI/Input/Input";

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

  };

  render() {
    return (
      <div className={classes.Contact} id="Contact">
        <Info2 title="Contact Me :)" />
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
          placeholder="Enter Your Message"
          type="text"
          name="message"
        />
        <div className={classes.Buttons}>
          <button type="button" onClick={this.submitForm}>Submit Form</button>
        </div>
      </div>
    );
  }
}

export default Contact;
