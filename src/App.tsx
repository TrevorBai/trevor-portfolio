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
  faCog,
  faArrowDown,
  faChartLine,
  faArrowUp,
  faChess,
  faAward,
  faTh,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faInfinity,
} from '@fortawesome/free-solid-svg-icons';
import Layout from './hoc/Layout';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import CertificatesPage from './pages/CertificatesPage';
import { Routes } from './utilities';
import AppsPage from './pages/AppsPage';
import WebsitesPage from './pages/WebsitesPage';
import GamesPage from './pages/GamesPage';
import ChatRoomPage from './pages/ChatRoomPage';
import ConnectingDots from './pages/ConnectingDotsPage';

library.add(
  far,
  fab,
  faBars,
  faComments,
  faBell,
  faAngleDown,
  faHome,
  faRocketchat,
  faCog,
  faArrowDown,
  faArrowUp,
  faChartLine,
  faAppStore,
  faChess,
  faChrome,
  faAward,
  faTh,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faInfinity
);

const App: FC = (): JSX.Element => {
  const routes = (
    <Switch>
      <Route path={Routes.Home} exact component={MainPage} />
      <Route
        path={Routes.Settings}
        render={(props) => <SettingsPage {...props} />}
      />
      <Route
        path={Routes.MyCertificates}
        render={(props) => <CertificatesPage {...props} />}
      />
      <Route path={Routes.MyApps} render={(props) => <AppsPage {...props} />} />
      <Route
        path={Routes.MyWebsites}
        render={(props) => <WebsitesPage {...props} />}
      />
      <Route
        path={Routes.MyGames}
        render={(props) => <GamesPage {...props} />}
      />
      <Route
        path={Routes.ChatRoom}
        render={(props) => <ChatRoomPage {...props} />}
      />
      <Route
        path={Routes.ConnectingDots}
        render={(props) => <ConnectingDots {...props} />}
      />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default withRouter(App);
