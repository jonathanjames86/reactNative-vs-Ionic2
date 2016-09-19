import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

import Data from "./pages/Data";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Resources from "./pages/Resources/Resources";
import ReactIntro from './pages/Resources/ReactIntro';
import ReactNative from './pages/Resources/ReactNative';
import Ionic2 from './pages/Resources/Ionic2';
import Angular2 from './pages/Resources/Angular2Intro';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="data" component={Data}></Route>
        <Route path="home" component={Home}></Route>
        <Route path="resources" component={Resources}>
          <IndexRoute component={ReactIntro}></IndexRoute>
          <Route path="react" component={ReactIntro}></Route>
          <Route path="reactNative" component={ReactNative}></Route>
          <Route path="ionic" component={Ionic2}></Route>
          <Route path="angular" component={Angular2}></Route>
        </Route>
        <Route path="layout" component={Layout}></Route>
    </Route>
  </Router>,
  document.getElementById('main'));
