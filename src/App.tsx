import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';

const App: React.FC = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={Header} />
    </Switch>
  );

  return <div>{routes}</div>;
};

export default withRouter(App);
