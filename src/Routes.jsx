import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetImage from "./GetImage";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={GetImage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
