import React from "react";
import Home from "./containers/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import About from "./containers/About/About";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
