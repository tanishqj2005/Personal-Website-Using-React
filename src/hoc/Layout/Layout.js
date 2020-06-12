import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navigation/Navbar/Navbar";
// import Footer from "../../components/UI/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <main className={classes.Content}>{this.props.children}</main>
        {/* <Footer /> */}
      </Aux>
    );
  }
}

export default Layout;
