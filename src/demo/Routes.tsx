import React from 'react';
import { Route, Switch } from 'react-router';
import DemoHomeScene from './scenes/DemoHomeScene';
import DemoLoginScene from './scenes/DemoLoginScene';

export default (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={DemoHomeScene} />
    <Route exact path="/login" component={DemoLoginScene} />
  </Switch>
);
