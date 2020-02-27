import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Type from "./Type";

import Home from "./Home";
import Recap from "./Recap";
import Conclusion from "./Conclusion";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Type" component={Type} />
        <Route path="/recap" component={Recap} />
        <Route path="/conclusion" component={Conclusion} />
      </Switch>
    );
  }
}

export default Routes;
