import React, { Component } from "react";
import Home from "./containers/Home/Home";
import { Route, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Projects from "./containers/Projects/Projects";
import { AnimatedSwitch } from "react-router-transition";
import Hobbies from "./containers/Hobbies/Hobbies";
import "./App.module.css";
import Loader from "./components/UI/Loader/Loader";

class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3500);
  }
  render() {
    let routes = (
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/hobbies" exact component={Hobbies} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/projects" exact component={Projects} />
        <Redirect to="/" />
      </AnimatedSwitch>
    );
    let display = null;
    if (this.state.loading) {
      display = <Loader />;
    } else {
      display = <Layout>{routes}</Layout>;
    }
    return <div className="App">{display}</div>;
  }
}

export default App;
