import React from 'react';
import { Route, Switch } from 'react-router';
import DemoLoginScene from './scenes/DemoLoginScene';

export default (): JSX.Element => (
  <Switch>
    <Route path="/login" component={DemoLoginScene} />
  </Switch>
);
