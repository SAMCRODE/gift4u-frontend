import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import Instructions from '../pages/Instructions';
import Register from '../pages/Register';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/instructions" component={Instructions} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
