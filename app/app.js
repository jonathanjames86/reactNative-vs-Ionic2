import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router"

import Layout from "./pages/Layout";
import Data from "./pages/Data";
import Home from "./pages/Home";
import Resources from "./pages/Resources";



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="data" component={Data}></Route>
        <Route path="home" component={Home}></Route>
        <Route path="resources" component={Resources}></Route>
        <Route path="layout" component={Layout}></Route>

    </Route>
  </Router>,
  document.getElementById('main'));
