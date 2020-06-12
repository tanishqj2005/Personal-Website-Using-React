import React, { Component } from "react";
import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from '../SideDrawer/SideDrawer';

class Navbar extends Component {
  state = {
    drawerOpen: false,
  };
  toggleDrawerHandler = () => {
    this.setState((prevState) => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    return (
      <header className={classes.Navbar} id="navbar">
        <Logo />
        <NavigationItems />
        <DrawerToggle open={this.state.drawerOpen} clicked={this.toggleDrawerHandler} />
        <SideDrawer show={this.state.drawerOpen} clicked={this.toggleDrawerHandler}/>
      </header>
    );
  }
}

export default Navbar;
