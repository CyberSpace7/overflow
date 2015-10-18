require('es6-promise').polyfill();
import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';
injectTapEventPlugin();

import App from './js/components/App';
import Home from './js/components/Home';
import LoginHandler from './js/components/Login';
import About from './js/components/List';
import LayoutGrid from './js/components/LayoutGrid';
import Settings from './js/components/Settings';
import SettingsProfile from './js/components/SettingsProfile';
import SettingsPreferences from './js/components/SettingsPreferences';
import SettingsAppearance from './js/components/SettingsAppearance';
import SettingsConnections from './js/components/SettingsConnections';
import AudioPlayer from './js/components/AudioPlayer';
require("!style!css!sass!./sass/application.scss");


const AppRoutes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="about" handler={About} />
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="layoutgrid" handler={LayoutGrid} />
    <Route name="settings" handler={Settings} />
    <Route name="profile" handler={SettingsProfile} />
    <Route name="preferences" handler={SettingsPreferences} />
    <Route name="appearance" handler={SettingsAppearance} />
    <Route name="connections" handler={SettingsConnections} />
    <Route name="audioplayer" handler={AudioPlayer} />
  </Route>
);

Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
