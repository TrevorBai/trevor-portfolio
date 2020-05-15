import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab, faRocketchat } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faComments,
  faLifeRing,
  faBell,
  faAngleDown,
  faHome,
  faChartBar,
  faUser,
  faToriiGate,
  faReceipt,
  faEnvelope,
  faCalendarAlt,
  faCog,
  faArrowDown,
  faChartLine,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import Layout from './hoc/Layout';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';

library.add(
  far,
  fab,
  faBars,
  faComments,
  faLifeRing,
  faBell,
  faAngleDown,
  faHome,
  faChartBar,
  faUser,
  faToriiGate,
  faReceipt,
  faEnvelope,
  faRocketchat,
  faCalendarAlt,
  faCog,
  faArrowDown,
  faArrowUp,
  faChartLine
);

const App: React.FC = (): JSX.Element => {
  const routes = (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/settings" render={(props) => <SettingsPage {...props} />} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default withRouter(App);
