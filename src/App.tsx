import React, { FC } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab, faRocketchat, faAppStore, faChrome } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faComments,
  faBell,
  faAngleDown,
  faHome,
  faChartBar,
  faUser,
  faToriiGate,
  faEnvelope,
  faCalendarAlt,
  faCog,
  faArrowDown,
  faChartLine,
  faArrowUp,
  faChess,
  faFileCsv,
  faAward,
  faTh,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import Layout from './hoc/Layout';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import CertificatesPage from './pages/CertificatesPage';
import { Routes } from './utilities';
import AppsPage from './pages/AppsPage';

library.add(
  far,
  fab,
  faBars,
  faComments,
  faBell,
  faAngleDown,
  faHome,
  faChartBar,
  faUser,
  faToriiGate,
  faEnvelope,
  faRocketchat,
  faCalendarAlt,
  faCog,
  faArrowDown,
  faArrowUp,
  faChartLine,
  faAppStore,
  faChess,
  faFileCsv,
  faChrome,
  faAward,
  faTh,
  faAngleDoubleRight,
  faAngleDoubleLeft
);

const App: FC = (): JSX.Element => {
  const routes = (
    <Switch>
      <Route path={Routes.Home} exact component={MainPage} />
      <Route path={Routes.Settings} render={(props) => <SettingsPage {...props} />} />
      <Route path={Routes.MyCertificates} render={(props) => <CertificatesPage {...props} />} />
      <Route path={Routes.MyApps} render={(props) => <AppsPage {...props} />} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default withRouter(App);
